import Image from 'next/image';

const ComingSoonHeader = () => {
  return (
    <div className="flex justify-center">
      <p className="text-xl">Our Scene</p>
    </div>
  );
};

const ComingSoonBody = () => {
  return (
    <div className="flex flex-col items-center self-center w-3/5 ">
      <p className="mb-5 text-5xl font-black text-center">COMING SOON</p>
      <Image src="/assets/logos/logo_yellow.svg" alt="logo" width={300} height={300} />
      <p className="mt-3 text-lg text-center">
        Our Scene is a web app being built by Merle, Kelsey and Bryan with the goal of fostering sober conscious
        communities around the world.
      </p>
    </div>
  );
};

const ComingSoonFooter = () => {
  return (
    <div className="flex self-center">
      <p>
        Also, to get{' '}
        <a
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          href="https://www.linkedin.com/in/merle-self/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merle
        </a>{' '}
        and{' '}
        <a
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          href="https://read.cv/kelseyroy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kelsey
        </a>{' '}
        jobs.
      </p>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-between h-full py-5 text-secondary">
      <ComingSoonHeader />
      <ComingSoonBody />
      <ComingSoonFooter />
    </div>
  );
};

export default ComingSoon;
