import { useQuery, useMutation, UseQueryOptions } from '@tanstack/react-query';
import { createAxiosClientWithAuth } from '../../../lib/axios';
import { AdminCreatePlace, AdminGetAllPlaces } from './types';

const ADMIN_PLACES_ROOT_PATH = '/admin/places';

// GET ALL PLACES
const generateAdminGetAllPlacesWithAuth = (idToken: string) => {
  const client = createAxiosClientWithAuth(idToken);
  const fn = async () => {
    const { data } = await client.get<AdminGetAllPlaces.Response>(ADMIN_PLACES_ROOT_PATH);
    return data;
  };
  return { path: ADMIN_PLACES_ROOT_PATH, fn };
};

export const useAdminGetAllPlacesQuery = (
  sessionIdToken: string,
  options: UseQueryOptions<AdminGetAllPlaces.Response> = {}
) => {
  const { path: queryKey, fn } = generateAdminGetAllPlacesWithAuth(sessionIdToken);
  return useQuery<AdminGetAllPlaces.Response>([queryKey], fn, options);
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
  const { path: queryKey, fn } = generateAdminCreatePlaceWithAuth(sessionIdToken);
  // TODO: use queryKey to append newly created place to cache array onMutate
  return useMutation({
    mutationFn: (body: AdminCreatePlace.Request['body']) => fn(body),
  });
};
