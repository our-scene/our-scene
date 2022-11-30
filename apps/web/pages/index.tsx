import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css"; 
// import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center items-center">
      <Head>
        <title>Our Scene Coming Soon</title>
        <meta name="description" content="Our Scene coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>This shit works</main>
    </div>
  );
}
