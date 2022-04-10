import { SigninProps } from '~/types';
import { api } from './api';

export const signinRequest = async ({ email, password }: SigninProps) =>
  await (
    await api.post('/auth/signin', { email, password })
  ).data;
