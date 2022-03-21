import { RouterProvider } from "./providers/Router";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
};

export default App;
