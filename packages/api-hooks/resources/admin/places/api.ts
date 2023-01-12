import { useQuery, useMutation, UseQueryOptions } from '@tanstack/react-query';
import { createAxiosClientWithAuth } from '../../../lib/axios';
import { AdminCreatePlace, AdminGetPlace, AdminGetPlaces } from './types';

const ADMIN_PLACES_ROOT_PATH = '/admin/places';

// GET ALL PLACES
const generateAdminGetPlacesWithAuth = (idToken: string) => {
  const client = createAxiosClientWithAuth(idToken);
  const fn = async () => {
    const { data } = await client.get<AdminGetPlaces.Response>(ADMIN_PLACES_ROOT_PATH);
    return data;
  };
  return { path: ADMIN_PLACES_ROOT_PATH, fn };
};

export const useAdminGetPlacesQuery = (
  sessionIdToken: string,
  options: UseQueryOptions<AdminGetPlaces.Response> = {}
) => {
  const { path: queryKey, fn } = generateAdminGetPlacesWithAuth(sessionIdToken);
  return useQuery<AdminGetPlaces.Response>([queryKey], fn, options);
};

// GET PLACE
const generateAdminGetPlaceWithAuth = (idToken: string, { id }: AdminGetPlace.Request['pathParams']) => {
  const client = createAxiosClientWithAuth(idToken);
  const fn = async () => {
    const getPlaceUrl = `${ADMIN_PLACES_ROOT_PATH}/${id}`;
    const { data } = await client.get<AdminGetPlace.Response>(getPlaceUrl);
    return data;
  };
  return { path: ADMIN_PLACES_ROOT_PATH, fn };
};

export const useAdminGetPlaceQuery = (
  sessionIdToken: string,
  { id }: AdminGetPlace.Request['pathParams'],
  options: UseQueryOptions<AdminGetPlace.Response> = {}
) => {
  const { path: queryKey, fn } = generateAdminGetPlaceWithAuth(sessionIdToken, { id });
  return useQuery<AdminGetPlace.Response>([queryKey], fn, options);
};

// CREATE PLACE
const generateAdminCreatePlaceWithAuth = (idToken: string) => {
  const client = createAxiosClientWithAuth(idToken);
  const fn = async (body: AdminCreatePlace.Request['body']) => {
    const { data } = await client.post<AdminCreatePlace.Response>(ADMIN_PLACES_ROOT_PATH, body);
    return data;
  };
  return { path: ADMIN_PLACES_ROOT_PATH, fn };
};

export const useAdminCreatePlaceMutation = (sessionIdToken: string) => {
  const { fn } = generateAdminCreatePlaceWithAuth(sessionIdToken);
  // TODO: use queryKey to append newly created place to cache array onMutate
  return useMutation({
    mutationFn: (body: AdminCreatePlace.Request['body']) => fn(body),
  });
};
