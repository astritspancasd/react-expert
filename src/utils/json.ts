export const jsonOr = (defaultValue: any) => (json: any) =>
  json ? JSON.parse(json) : defaultValue;

export const toJson = (...args: any) => JSON.stringify(args);

export const formatJson = (obj: any, { replacer = null, space = 4 } = {}) =>
  JSON.stringify(obj, replacer, space);

export const fromJson = (...args: any) => JSON.parse(args);

export const isJson = (value: any) => {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
};
