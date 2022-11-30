import Head from "next/head";
import Image from "next/image";
// import {ComingSoon} from '..'
import ComingSoon from "../components/ComingSoon";
// import styles from "../styles/Home.module.css";
// import 'tailwindcss/tailwind.css';

export default function Home() {
  // const userAuthContext = useUserAuthContext();
  // const { session, signOut } = userAuthContext;

  // const getUsersQuery = useGetUsersWithAuth(session, {
  //   enabled: Boolean(session),
  //   refetchOnMount: "always",
  // });

  // const handleSignOut = () => {
  //   signOut();
  // };

  return (
    <div>
      <Head>
        <title>Our Scene Coming Soon</title>
        <meta name="description" content="Our Scene coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100 via-amber-200 to-blue-700">
        <div className="flex flex-col items-center justify-center">
          <h1 className="items-center font-black">Our Scene</h1>
        </div>
        <div className="flex flex-col items-center w-full justify-items-center">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
}
