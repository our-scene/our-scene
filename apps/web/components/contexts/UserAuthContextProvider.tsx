import React, { useContext, useEffect } from "react";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

type SessionStatus = "loading" | "authenticated" | "unauthenticated";

type UserAuthContext = {
  session: Session | null;
  sessionStatus: SessionStatus;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const UserAuthContext = React.createContext<UserAuthContext>(
  {} as UserAuthContext
);

export const UserAuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  console.log({ router });
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (router.pathname === "/login" && sessionStatus === "authenticated") {
      router.push("/");
    }
    if (router.pathname !== "/login" && sessionStatus === "unauthenticated") {
      router.push("/login");
    }
  }, [sessionStatus, router]);

  return (
    <UserAuthContext.Provider
      value={{
        session,
        sessionStatus,
        signIn,
        signOut,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuthContext = () =>
  useContext<UserAuthContext>(UserAuthContext);
