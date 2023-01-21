import axios, { AxiosRequestTransformer, AxiosResponseTransformer } from 'axios';
import { camelToSnakeCaseObject, snakeToCamelCaseObject } from './object_helpers';

type AxiosClientOptions = {
  headers?: {
    'Content-Type': string;
  };
};
export const createAxiosClientWithAuth = (idToken: string, options = {}) => {
  const { headers }: { headers?: Object } = options;
  let defaultHeaders = {
    Authorization: `Bearer ${idToken}`,
    'Access-Control-Allow-Origin': '*',
  };
  if (headers) {
    defaultHeaders = {
      ...defaultHeaders,
      ...headers,
    };
  }

  const client = axios.create({
    baseURL: 'http://localhost:3000',
    headers: defaultHeaders,
    transformRequest: [handleTransformAxiosRequest, ...defaultRequestTransformers()],
    transformResponse: [...defaultResposneTransformers(), handleTransformAxiosResponse],
  });
  return client;
};

// PRIVATE FUNCTIONS ONLY USED TO CREATE OUR DANK AXIOS CLIENT
// AXIOS REQUEST / REPONSE TRANFORMERS ****************
// this is where we'll serialize our data for rails
// mainly changing keys from camelCase to snake_case
const handleTransformAxiosRequest: AxiosRequestTransformer = (data) => {
  const transformedData = camelToSnakeCaseObject(data);
  return transformedData;
};

// // This is where we're 'deserialize' our rails data
// // For now, let's just pass the response through.
// mainly changing keys from snake_case to camelCase
const handleTransformAxiosResponse: AxiosResponseTransformer = (data) => {
  if (typeof data === 'string') return data;
  const transformedData = snakeToCamelCaseObject(data);
  return transformedData;
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
