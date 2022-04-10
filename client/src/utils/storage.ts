import * as ls from 'local-storage';

export const storage = {
  add: (key: string, value: string): void => {
    ls.set(key, value);
  },
  remove: (key: string): void => {
    ls.remove(key);
  },
  get: (key: string): string => {
    return ls.get(key);
  },
  clear: (): void => {
    ls.clear();
  },
};
