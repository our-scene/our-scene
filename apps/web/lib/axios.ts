import axios from "axios";
import { Session } from "next-auth";

export const createAxiosClientWithAuth = (session: Session | null) => {
  console.log({ session });
  const client = axios.create({ baseURL: "http://localhost:3000" });
  return client;
};
