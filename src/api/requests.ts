import { AxiosResponse } from 'axios';
import { UserInterface } from '~/models';
import { api } from './api';
import { DELETE, GET, PUT } from './methods';

interface UserResponseInterface {
  data: UserInterface[];
}

export const fetchUsers = (): Promise<
  AxiosResponse<UserResponseInterface[]>
> => {
  return api({ method: GET, url: '/users' });
};

export const fetchUser = (
  userId: number,
): Promise<AxiosResponse<UserResponseInterface>> => {
  return api({ method: GET, url: `/user/${userId}` });
};

export const deleteUser = (
  userId: number,
): Promise<AxiosResponse<UserResponseInterface>> => {
  return api({ method: DELETE, url: `/user/${userId}` });
};

export const updateUser = (
  userId: number,
  payload: UserInterface,
): Promise<AxiosResponse<UserResponseInterface[]>> => {
  return api({ method: PUT, url: `/user/${userId}`, data: payload });
};
