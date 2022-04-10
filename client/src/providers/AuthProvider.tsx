import { FC, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate('/posts');
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

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
