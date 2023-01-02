// move this somewhere better?
import { useUserAuthContext } from './contexts/UserAuthContextProvider';

export const LogoutNavbarMenuItem = () => {
  const { signOut } = useUserAuthContext();
  return <div onClick={signOut}>Log Out</div>;
};
