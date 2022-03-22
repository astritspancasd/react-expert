import { FC, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

const Context = createContext({
  isAuthenticated: true,
  login: () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(Context);

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = () => setIsAuthenticated(true);

  const logout = () => setIsAuthenticated(false);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};
