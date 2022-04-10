import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { isDev } from '~/utils/environment';

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const ReactQueryProvider: FC<ReactQueryProviderProps> = (props) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      {children} {isDev() && <ReactQueryDevtools initialIsOpen />}
    </QueryClientProvider>
  );
};
