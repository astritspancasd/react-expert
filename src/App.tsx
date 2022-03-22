import { RouterProvider, AuthProvider } from '~/providers';
import { AppRoutes } from '~/routes';

const App = () => {
  return (
    <RouterProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </RouterProvider>
  );
};

export default App;
