import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#cc7e1a',
      dark: '#cc7e1a',
      contrastText: '#fff',
      light: '#cc7e1a',
    },
    secondary: {
      main: '#000000',
      dark: '#cc7e1a',
      contrastText: '#fff',
      light: '#cc7e1a',
    },
  },
  typography: {
    fontFamily: [
      'Bai Jamjuree',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
});
