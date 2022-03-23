import { FC } from 'react';
import { ThemeProvider as Mui5ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '~/components';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  return (
    <Mui5ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </Mui5ThemeProvider>
  );
};
