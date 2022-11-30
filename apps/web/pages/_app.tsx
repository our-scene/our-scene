// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Exo } from "@next/font/google";
import "tailwindcss/tailwind.css";

// If loading a variable font, you don't need to specify the font weight
const exo = Exo({
  weight: "900",
  // style: 'black',
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={exo.className}>
    <>
      <style jsx global>{`
        html {
          font-family: ${exo.style.fontFamily};
          height: 100%;
        }
        .main {
          min-height: 100vh;
        }
      `}</style>
      <Component {...pageProps} />
      {/* </main> */}
    </>
  );
}
