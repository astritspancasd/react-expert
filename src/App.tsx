import { RouterProvider, AuthProvider } from '~/providers';
import { AppRoutes } from '~/routes';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
  return (
    <RouterProvider>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </RouterProvider>
  );
};

export default App;
