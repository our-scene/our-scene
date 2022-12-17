import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { createAxiosClientWithAuth } from "../../lib/axios";
import { GetUsers } from "./types";

const generateGetUsersWithAuth = (idToken: string) => {
  const client = createAxiosClientWithAuth(idToken);
  const path = "/users";
  const fn = async () => {
    const { data } = await client.get<GetUsers.Response>(path);
    return data;
  };
  return { path, fn };
};

export const useGetUsersWithAuth = (
  idToken: string,
  options: UseQueryOptions<GetUsers.Response> = {}
) => {
  const { path: queryKey, fn } = generateGetUsersWithAuth(idToken);
  return useQuery<GetUsers.Response>([queryKey], fn, options);
};
