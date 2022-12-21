import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GetAllEvents, GetUpcomingEvents } from "./types";
import { createAxiosClientWithAuth } from "../../lib/axios";

const EVENTS_ROOT_PATH = "/events";
const UPCOMING_EVENTS_ROOT_PATH = "/events/upcoming";

const generateGetAllEventsWithAuth = (idToken: string) => {
  const client = createAxiosClientWithAuth(idToken);
  const fn = async () => {
    const { data } = await client.get<GetAllEvents.Response>(EVENTS_ROOT_PATH);
    return data;
  };
  return { path: EVENTS_ROOT_PATH, fn };
};

export const useGetAllEventsQuery = (
  sessionIdToken: string,
  options: UseQueryOptions<GetAllEvents.Response> = {}
) => {
  const { path: queryKey, fn } = generateGetAllEventsWithAuth(sessionIdToken);
  return useQuery<GetAllEvents.Response>([queryKey], fn, options);
};

const generateGetUpcomingEvents = (idToken: string) => {
  const client = createAxiosClientWithAuth(idToken);
  const fn = async () => {
    const { data } = await client.get<GetUpcomingEvents.Response>(
      UPCOMING_EVENTS_ROOT_PATH
    );
    return data;
  };
  return { path: UPCOMING_EVENTS_ROOT_PATH, fn };
};

export const useGetUpcomingEventsQuery = (
  sessionIdToken: string,
  options: UseQueryOptions<GetUpcomingEvents.Response> = {}
) => {
  const { path: queryKey, fn } = generateGetUpcomingEvents(sessionIdToken);
  return useQuery<GetUpcomingEvents.Response>([queryKey], fn, options);
};
