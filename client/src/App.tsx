import {
  RouterProvider,
  AuthProvider,
  ThemeProvider,
  ReactQueryProvider,
} from '~/providers';
import { AppRoutes } from '~/routes';

const App = () => {
  return (
    <RouterProvider>
      <ReactQueryProvider>
        <AuthProvider>
          <ThemeProvider>
            <AppRoutes />
          </ThemeProvider>
        </AuthProvider>
      </ReactQueryProvider>
    </RouterProvider>
  );
};

export default App;
