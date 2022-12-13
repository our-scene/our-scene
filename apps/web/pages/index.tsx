import { useGetAllEventsQuery, useGetUpcomingEventsQuery } from "@our-scene/api-hooks";
import Head from "next/head";
import ComingSoon from "../components/ComingSoon";
import { useUserAuthContext } from "../components/contexts/UserAuthContextProvider";
import { useGetUsersWithAuth } from "../services/users";
// import { useGetAllEventsQuery, useQueryClient } from '@our-scene/api-hooks'


export default function Home() {
  const userAuthContext = useUserAuthContext();
  const { session, signOut } = userAuthContext;

  const getUsersQuery = useGetUsersWithAuth(session, {
    enabled: Boolean(session),
    refetchOnMount: "always",
  });
  // console.log(getQuery)

  const handleSignOut = () => {
    signOut();
  };

  // header, footer and body: coming soon component  
  const getAllEventsQuery = useGetAllEventsQuery(session?.idToken, { enabled: Boolean(session?.idToken) })
  // const getUpcomingEventsQuery = useGetUpcomingEventsQuery(session?.idToken, { enabled: Boolean(session?.idToken) });
  // console.log('Upcoming Events: ', getUpcomingEventsQuery)
  // const queryClient = useQueryClient()

  return (
    <div className="flex flex-col items-center justify-items-center">
      <Head>
        <title>Our Scene Coming Soon</title>
        <meta name="description" content="Our Scene coming soon page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main bg-[#14213d] h-full">
        <ComingSoon />
        <button onClick={handleSignOut}>Log out</button>
      </div>
    </div>
  );
}
