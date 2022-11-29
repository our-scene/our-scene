import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Scene Coming Soon</title>
        <meta name="description" content="Our Scene coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>This shit works</main>
    </div>
  );
}
