import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    idToken: string;
    userId: number;
    refreshToken: string;
    error?: string;
  }

  interface Account {
    expires_at: number;
    refreshToken: string;
  }

  interface JWT {
    accessTokenExpires: number;
    refreshToken: string;
    idTokenExpires: string;
    userId: number;
  }
}
