import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { UserAuthContextProvider } from "../components/contexts/UserAuthContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserAuthContextProvider>
        <Component {...pageProps} />
      </UserAuthContextProvider>
    </SessionProvider>
  );
}
