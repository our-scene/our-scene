import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { UserAuthContextProvider } from "../components/contexts/UserAuthContextProvider";

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    useErrorBoundary: true,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserAuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </UserAuthContextProvider>
    </SessionProvider>
  );
}
