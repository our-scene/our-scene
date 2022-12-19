import Image from 'next/image';
import { useUserAuthContext } from '../components/contexts/UserAuthContextProvider';
import { BaseLayout } from '../components/layout/BaseLayout';

const Login = () => {
  const { signIn } = useUserAuthContext();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <BaseLayout showNavBar={false}>
      <div className="w-full flex flex-col items-center justify-center">
        <Image src="/assets/logos/logo.svg" alt="logo" width={600} height={600} />
        <div className="btn btn-primary" onClick={handleSignIn}>
          Sign In
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
