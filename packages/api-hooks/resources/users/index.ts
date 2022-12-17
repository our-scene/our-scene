import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Session } from "next-auth";
import { createAxiosClientWithAuth } from "../../lib/axios";
import { GetUsers } from "./types";

const generateGetUsersWithAuth = (idToken: Session) => {
  const client = createAxiosClientWithAuth(idToken);
  const path = "/users";
  const fn = async () => {
    const { data } = await client.get<GetUsers.Response>(path);
    return data;
  };
  return { path, fn };
};

export const useGetUsersWithAuth = (
  session: Session | null,
  options: UseQueryOptions<GetUsers.Response> = {}
) => {
  if (session === null) return;
  const { path: queryKey, fn } = generateGetUsersWithAuth(session);
  return useQuery<GetUsers.Response>([queryKey], fn, options);
};
