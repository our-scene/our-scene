import Head from "next/head";
import Image from "next/image";
// import {ComingSoon} from '..'
import ComingSoon from "../components/ComingSoon";
// import styles from "../styles/Home.module.css";
// import 'tailwindcss/tailwind.css';
import { useGetAllEventsQuery, useQueryClient } from '@our-scene/api-hooks'


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

  // header, footer and body: coming soon component  
  const getAllEventsQuery = useGetAllEventsQuery()
  const queryClient = useQueryClient()

  console.log('1: ', queryClient)

  console.log(getAllEventsQuery)

  return (
    <div className="flex flex-col items-center justify-items-center">
      <Head>
        <title>Our Scene Coming Soon</title>
        <meta name="description" content="Our Scene coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main bg-[#14213d] h-full">
        <ComingSoon />
      </div>
    </div>
  );
}
