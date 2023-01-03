export const camelToSnakeCase = (str: string) => {
  return str.replace(/[A-Z]/g, (s: string) => '_' + s.toLowerCase());
};

export const snakeToCamelCase = (str: string) => {
  return str.replace(/(_\w)/g, (s) => s[1].toUpperCase());
};
