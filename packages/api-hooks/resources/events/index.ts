import axios from 'axios'
import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { GetAllEvents } from './types'
import { createAxiosClientWithAuth } from '../../lib/axios';

const EVENTS_ROOT_PATH = '/events';


const generateGetAllEventsWithAuth = (idToken: string) => {
  console.log({ idToken })
  const client = createAxiosClientWithAuth(idToken);
  const fn = async () => {
    const { data } = await client.get<GetAllEvents.Response>(EVENTS_ROOT_PATH);
    return data;
  };
  return { path: EVENTS_ROOT_PATH, fn };
}

export const useGetAllEventsQuery = (sessionIdToken: string, options: UseQueryOptions<GetAllEvents.Response> = {}) => {
  const { path: queryKey, fn } = generateGetAllEventsWithAuth(sessionIdToken);
  return useQuery<GetAllEvents.Response>([queryKey], fn, options);
}
