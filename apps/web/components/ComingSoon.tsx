import Link from "next/link";
import Image from "next/image"

const ComingSoonHeader = () => {
  return (
    <div className="flex justify-center">
      <p className="text-xl">Our Scene</p>
    </div>
  )
}

const ComingSoonBody = () => {
  return (
    <div className=" flex flex-col self-center items-center w-3/5 ">
      <p className="text-5xl text-center mb-5 font-black">COMING SOON</p>
      <Image src="/assets/logos/logo_yellow.svg" alt="logo" width={300} height={300} />
      <p className="text-lg text-center mt-3">
        Our Scene is a web app being built by Merle, Kelsey and Bryan with the
        goal of fostering sober conscious communities around the world.
      </p>
    </div>
  )
}

const ComingSoonFooter = () => {
  return (
    <div className="flex self-center">
      <p>
        Also, to get {" "}
        <a
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          href="https://www.linkedin.com/in/merle-self/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merle
        </a>{" "} and{" "}
        <a
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          href="https://read.cv/kelseyroy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kelsey
        </a>{" "}
        jobs.
      </p>
    </div >
  )
}
const ComingSoon = () => {
  return (
    <div className="flex flex-col h-full justify-between py-5 text-[#fce57b]">
      <ComingSoonHeader />
      <ComingSoonBody />
      <ComingSoonFooter />
    </div>
  );
};

export default ComingSoon;
