import axios from "axios";
import { Session } from "next-auth";

export const createAxiosClientWithAuth = (session: Session | null) => {
  console.log({ session });
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
