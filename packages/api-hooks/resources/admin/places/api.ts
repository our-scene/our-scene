import { useQuery, useMutation, UseQueryOptions } from '@tanstack/react-query';
import { createAxiosClientWithAuth } from '../../../lib/axios';
import { AdminCreatePlace, AdminDeletePlace, AdminGetPlace, AdminGetPlaces, AdminUpdatePlace } from './types';

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
const generateAdminGetPlace = (idToken: string, { id }: AdminGetPlace.Request['pathParams']) => {
  const client = createAxiosClientWithAuth(idToken);
  const getPlaceUrl = `${ADMIN_PLACES_ROOT_PATH}/${id}`;
  const fn = async () => {
    const { data } = await client.get<AdminGetPlace.Response>(getPlaceUrl);
    return data;
  };
  return { path: getPlaceUrl, fn };
};

export const useAdminGetPlaceQuery = (
  sessionIdToken: string,
  { id }: AdminGetPlace.Request['pathParams'],
  options: UseQueryOptions<AdminGetPlace.Response> = {}
) => {
  const { path: queryKey, fn } = generateAdminGetPlace(sessionIdToken, { id });
  return useQuery<AdminGetPlace.Response>([queryKey], fn, options);
};

// CREATE PLACE
const generateAdminCreatePlace = (idToken: string) => {
  const client = createAxiosClientWithAuth(idToken);
  const fn = async (body: AdminCreatePlace.Request['body']) => {
    const { data } = await client.post<AdminCreatePlace.Response>(ADMIN_PLACES_ROOT_PATH, body);
    return data;
  };
  return { path: ADMIN_PLACES_ROOT_PATH, fn };
};

export const useAdminCreatePlaceMutation = (sessionIdToken: string) => {
  const { fn } = generateAdminCreatePlace(sessionIdToken);
  return useMutation({
    mutationFn: (body: AdminCreatePlace.Request['body']) => fn(body),
  });
};

// UPDATE PLACE
const generateAdminUpdatePlace = (idToken: string, { id }: AdminUpdatePlace.Request['pathParams']) => {
  const client = createAxiosClientWithAuth(idToken);
  const updatePlaceUrl = `${ADMIN_PLACES_ROOT_PATH}/${id}`;
  const fn = async (body: AdminUpdatePlace.Request['body']) => {
    const { data } = await client.put<AdminUpdatePlace.Response>(updatePlaceUrl, body);
    return data;
  };
  return { path: updatePlaceUrl, fn };
};

export const useAdminUpdatePlaceMutation = (idToken: string, { id }: AdminUpdatePlace.Request['pathParams']) => {
  const { fn } = generateAdminUpdatePlace(idToken, { id });
  return useMutation({
    mutationFn: (body: AdminUpdatePlace.Request['body']) => fn(body),
  });
};

// DELETE PLACE
const generateAdminDeletePlace = (idToken: string, { id }: AdminDeletePlace.Request['pathParams']) => {
  const client = createAxiosClientWithAuth(idToken);
  const deletePlaceUrl = `${ADMIN_PLACES_ROOT_PATH}/${id}`;
  const mutationFn = async () => {
    const { data } = await client.delete<AdminGetPlace.Response>(deletePlaceUrl);
    return data;
  };
  return { path: deletePlaceUrl, mutationFn };
};

export const useAdminDeletePlaceMutation = (
  sessionIdToken: string,
  { id }: AdminGetPlace.Request['pathParams'],
  options: UseQueryOptions<AdminGetPlace.Response> = {}
) => {
  const { mutationFn } = generateAdminDeletePlace(sessionIdToken, { id });
  return useMutation({
    mutationFn,
  });
};
