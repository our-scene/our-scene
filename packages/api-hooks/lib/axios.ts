import axios, { AxiosError, AxiosResponse } from 'axios';

// For now, let's just pass the response through.
// This is where we're 'deserialize'
const handleAxiosResponse = (response: AxiosResponse) => response;

const handleAxiosError = (error: AxiosError<unknown, { data: unknown }>) => {
  // const { response } = error;
  // if (response) {
  //   const { data } = response;
  //   console.log('ERROR: ', data);
  //   if (data.error === 'ID_TOKEN_EXPIRED') {

  //   }
  // }
  return Promise.reject(error);
};

export const createAxiosClientWithAuth = (idToken: string) => {
  const headers = {
    Authorization: `Bearer ${idToken}`,
    'Access-Control-Allow-Origin': '*',
  };

  const client = axios.create({
    baseURL: 'http://localhost:3000',
    headers,
  });

  client.interceptors.response.use(handleAxiosResponse, handleAxiosError);
  return client;
};
