import Head from "next/head";
import { useUserAuthContext } from "../components/contexts/UserAuthContextProvider";

export default function Home() {
  const userAuthContext = useUserAuthContext();
  const { signOut } = userAuthContext;

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="main bg-secondary">
      <Head>
        <title>Our Scene Coming Soon</title>
        <meta name="description" content="Our Scene coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full flex items-center justify-center">
        <button onClick={handleSignOut}>Log out</button>
      </div>
    </div>
  );
}
