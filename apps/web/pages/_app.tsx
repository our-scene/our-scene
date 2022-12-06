import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Exo } from "@next/font/google";
import { QueryClient, QueryClientProvider } from '@our-scene/api-hooks'

import "tailwindcss/tailwind.css";
import { UserAuthContextProvider } from "../components/contexts/UserAuthContextProvider";
import { SessionProvider } from "next-auth/react";

// If loading a variable font, you don't need to specify the font weight
// another comment 
const exo = Exo({
  // weight: "900",
  // style: 'black',
  subsets: ["latin"],
});

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...pagePropsWithoutSession } = pageProps
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${exo.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <UserAuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <Component {...pagePropsWithoutSession} />
          </QueryClientProvider>
        </UserAuthContextProvider>
      </SessionProvider>
    </>
  );
}
