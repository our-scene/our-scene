import Link from "next/link";

const ComingSoon = () => {
  return (
    <div>
      <p className="text-6xl">Coming Soon</p>
      <p className="text-xl">
        Our Scene is a web app being built by Merle, Kelsey and Bryan with the
        goal of fostering sober conscious communities around the world. Also, to
        get {" "}
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
    </div>
  );
};

export default ComingSoon;
