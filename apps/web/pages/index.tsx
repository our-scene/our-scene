import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { BaseLayout } from '../components/layout/BaseLayout';
import { useGetUsersWithAuth } from '@our-scene/api-hooks/resources/users';

export default function Home() {
  const { data: session } = useSession();
  const getUsers = useGetUsersWithAuth(session?.idToken as string, { enabled: Boolean(session?.idToken) });
  const handleSignOut = () => {
    signOut();
  };
  return (
    <BaseLayout>
      <div className="w-full flex flex-col items-center justify-center">
        <Image src="/assets/logos/logo.svg" alt="logo" width={600} height={600} />
        <div className="btn btn-primary" onClick={handleSignOut}>
          Log Out
        </div>
      </div>
    </BaseLayout>
  );
}
