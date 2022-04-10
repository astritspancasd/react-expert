import { useMutation } from 'react-query';
import { signinRequest } from '~/api/auth';
import { SigninProps } from '~/types';

export const useSigninMutation = () => {
  return useMutation(({ email, password }: SigninProps) => signinRequest({ email, password }));
};
