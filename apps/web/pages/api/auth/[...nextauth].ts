import NextAuth, { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

// something is fucked in this refresh toekn business
async function refreshAccessToken(token: JWT) {
  try {
    const url =
      'https://oauth2.googleapis.com/token?' +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID as string,
        client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken as string,
      });

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    console.log('refreshingToken');
    return {
      ...token,
      idToken: refreshedTokens.id_token,
      idTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

const createOrFindUserByEmail = async ({ email, name }: { email: string; name?: string | null }) => {
  // TODO: the domain should come from .env variables
  const url = `http://localhost:3000/admin/users`;
  const body = { email, name };
  console.log(body);
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const user = await response.json();
  return user.id;
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user && user.email) {
        const body = { email: user.email, name: user.name };
        const userId = await createOrFindUserByEmail(body);
        // TODO: put whole user on session??
        return {
          idToken: account.id_token,
          idTokenExpires: account.expires_at,
          refreshToken: account.refresh_token,
          userId,
        };
      }
      // Return previous token if the access token has not expired yet
      if (Date.now() < (token.idTokenExpires as number)) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.idToken = token.idToken as string;
      session.refreshToken = token.refreshToken as string;
      session.expires = new Date(token.idTokenExpires as string).toISOString();
      session.userId = token.userId as number;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
};

export default NextAuth(authOptions);
