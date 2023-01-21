import axios, { AxiosRequestTransformer, AxiosResponseTransformer } from 'axios';
import { TJsonApiBody } from 'jsona/lib/JsonaTypes';
import {  } from './generic_types';
import { jsonApiFormatter } from './json-api';
import { camelToSnakeCaseObject, snakeToCamelCaseObject } from './object_helpers';

export const createAxiosClientWithAuth = (idToken: string, options = {}) => {
  const { headers }: { headers?: Object } = options;
  let defaultHeaders = {
    Authorization: `Bearer ${idToken}`,
    'Access-Control-Allow-Origin': '*',
  };

  const client = axios.create({
    baseURL: 'http://localhost:3000',

    headers: defaultHeaders,
    transformRequest: [handleTransformAxiosRequest, ...defaultRequestTransformers()],
    transformResponse: [
      ...defaultResposneTransformers(),
      handeDeserializeJsonApiResponse,
      handleTransformAxiosResponse,
    ],
  });

  client.interceptors.response.use(handleAxiosResponse, handleAxiosError);
  return client;
// PRIVATE FUNCTIONS ONLY USED TO CREATE OUR DANK AXIOS CLIENT
// AXIOS REQUEST / REPONSE TRANFORMERS ****************
const handleTransformAxiosRequest: AxiosRequestTransformer = (data) => {
  const transformedData = camelToSnakeCaseObject(data);
  return transformedData;
};

// // This is where we're 'deserialize' our rails data
// // For now, let's just pass the response through.
const handleTransformAxiosResponse: AxiosResponseTransformer = (data) => {
  if (typeof data === 'string') return data;
  const transformedData = snakeToCamelCaseObject(data);
  return transformedData;
};

const handeDeserializeJsonApiResponse: AxiosResponseTransformer = (
  data: TJsonApiBody & { meta?: AnyObject; errors?: AnyObject }
) => {
  if (data === null || data.data === null) return null;
  if (data.errors) return data;

  const { meta } = data;
  const deserializedData = jsonApiFormatter.deserialize(data);
  if (Array.isArray(deserializedData)) {
    return deserializedData;
  }
  return {
    ...(meta ? { meta } : {}),
    ...deserializedData,
  };
};

// AXIOS CLIENT CREATION HELPERS ****************
// axios.defaults.transformRequest/transformResponse may be an array, a single object, or null
// these two functions provide a quick safety net for each scenario, so that we can put
// our serailization/deserialization functions within the transformRequest/transformResponse array properties
// when creating a new axios client (see above)
const defaultRequestTransformers = (): AxiosRequestTransformer[] => {
  const { transformRequest } = axios.defaults;
  if (!transformRequest) return [];
  else if (transformRequest instanceof Array) return transformRequest;
  return [transformRequest];
};

const defaultResposneTransformers = (): AxiosResponseTransformer[] => {
  const { transformResponse } = axios.defaults;
  if (!transformResponse) return [];
  else if (transformResponse instanceof Array) return transformResponse;
  return [transformResponse];
};
