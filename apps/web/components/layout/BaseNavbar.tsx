import Image from 'next/image';
export const BaseNavBar = () => {
  return (
    <div className="navbar bg-primary flex justify-between w-full px-4 h-5">
      <Image src="/assets/logos/logo_yellow.svg" alt="logo" height={40} width={40} />
      <div className="flex justify-between">
        <div className="text-primary-content mr-2">Home</div>
        <div className="text-primary-content mr-2">Events</div>
        <div className="text-primary-content mr-2">Places</div>
        <div className="text-primary-content mr-2">About Us</div>
      </div>
    </div>
  );
};
