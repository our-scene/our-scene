import NextAuth from "next-auth";

declare module "next-auth" {
  type SessionStatus = 'loading' | 'authenticated' | 'un
  interface Session {
    idToken: string;
  }
}
