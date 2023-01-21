import { AnyObject } from './generic_types';
import { camelToSnakeCase, snakeToCamelCase } from './sting_helpers';

export const camelToSnakeCaseObject = (object: any): [] | AnyObject => {
  if (object instanceof FormData) return object;
  const snakeCaseObject: AnyObject = {};
  if (Array.isArray(object)) {
    return object.map(camelToSnakeCaseObject);
  }
  for (const key in object) {
    if (isPlainObject(object[key])) {
      snakeCaseObject[camelToSnakeCase(key)] = camelToSnakeCaseObject(object[key]);
    } else {
      snakeCaseObject[camelToSnakeCase(key)] = object[key];
    }
  }
  return snakeCaseObject;
};

export const snakeToCamelCaseObject = (object: any): [] | AnyObject => {
  if (object instanceof FormData) return object;
  const camelCaseObject: AnyObject = {};
  if (Array.isArray(object)) {
    return object.map(snakeToCamelCaseObject);
  }
  for (const key in object) {
    if (isPlainObject(object[key])) {
      camelCaseObject[snakeToCamelCase(key)] = snakeToCamelCaseObject(object[key]);
    } else {
      camelCaseObject[snakeToCamelCase(key)] = object[key];
    }
  }
  return camelCaseObject;
};

const isPlainObject = (maybeObject: any) => {
  return maybeObject && !Array.isArray(maybeObject) && typeof maybeObject === 'object';
};
