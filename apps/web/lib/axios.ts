import axios from "axios";
import { Session } from "next-auth";

// TODO: consolidate this w/ react-query hooks in shared package
export const createAxiosClientWithAuth = (session: Session | null) => {
  const idToken = session?.idToken;
  const headers = {
    Authorization: `Bearer ${idToken}`,
    "Access-Control-Allow-Origin": "*",
  };

  const client = axios.create({
    baseURL: "http://localhost:3000",
    headers,
  });
  return client;
};
