import Head from "next/head";

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
