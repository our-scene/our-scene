import Head from "next/head";
import { useUserAuthContext } from "../components/contexts/UserAuthContextProvider";
// import { useGetUsersWithAuth } from "../services/users";
import styles from "../styles/Home.module.css";

export default function Home() {
  const userAuthContext = useUserAuthContext();
  const { session, signOut } = userAuthContext;

  // const getUsersQuery = useGetUsersWithAuth(session, {
  //   enabled: Boolean(session),
  //   refetchOnMount: "always",
  // });

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Our Scene Coming Soon</title>
        <meta name="description" content="Our Scene coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>This shit works</div>
        <button onClick={handleSignOut}>Sign Out</button>
      </main>
    </div>
  );
}
