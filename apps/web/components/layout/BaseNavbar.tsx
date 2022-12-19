import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUserAuthContext } from '../contexts/UserAuthContextProvider';
import { DropdownMenu } from '../lib/Dropdown';

const LogoutNavbarMenuItem = () => {
  const { signOut } = useUserAuthContext();
  return <div onClick={signOut}>Log Out</div>;
};

export const BaseNavBar = () => {
  const { pathname } = useRouter();

  const navBarItemClassName = 'text-primary-content mr-2';
  const activeavBarItemClassName = navBarItemClassName + ' underline';
  return (
    <div className="navbar bg-primary flex justify-between w-full px-4 h-5">
      <Link href="/">
        <Image src="/assets/logos/logo_yellow.svg" alt="logo" height={40} width={40} />
      </Link>
      <div className="flex justify-between">
        <div className={pathname === '/' ? activeavBarItemClassName : navBarItemClassName}>
          <Link href="/">Home</Link>
        </div>
        <div className={pathname === '/places' ? activeavBarItemClassName : navBarItemClassName}>
          <Link href="/places">Places</Link>
        </div>
        <div className={pathname === '/events' ? activeavBarItemClassName : navBarItemClassName}>
          <Link href="/events">Events</Link>
        </div>
        <div className={pathname === '/about' ? activeavBarItemClassName : navBarItemClassName}>
          <Link href="/about">About</Link>
        </div>
      </div>
      <DropdownMenu menuItems={[<LogoutNavbarMenuItem key={1} />]} />
    </div>
  );
};
