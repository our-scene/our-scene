import axios from 'axios'

export const createAxiosClientWithAuth = (idToken?: string) => {
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

