import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DropdownMenu } from '../lib/Dropdown';
import { LogoutNavbarMenuItem } from '../NavBarLogoutMenuItem';

export const AdminNavBar = () => {
  const { pathname } = useRouter();

  const navBarItemClassName = 'text-primary-content mr-2';
  const activeavBarItemClassName = navBarItemClassName + ' underline';
  return (
    <div className="navbar bg-primary flex justify-between w-full px-4 h-5">
      <Link href="/">
        <Image src="/assets/logos/logo_yellow.svg" alt="logo" height={40} width={40} />
      </Link>
      <div className="flex justify-between">
        <div className={navBarItemClassName}>
          <Link href="/">Home</Link>
        </div>
        <div className={pathname === '/admin' ? activeavBarItemClassName : navBarItemClassName}>
          <Link href="/admin">Admin Home</Link>
        </div>
        <div className={pathname.includes('/admin/places') ? activeavBarItemClassName : navBarItemClassName}>
          <Link href="/admin/places">Admin Places</Link>
        </div>
        <div className={pathname.includes('/admin/events') ? activeavBarItemClassName : navBarItemClassName}>
          <Link href="/admin/events">Admin Events</Link>
        </div>
      </div>
      <DropdownMenu menuItems={[<LogoutNavbarMenuItem key={1} />]} />
    </div>
  );
};
