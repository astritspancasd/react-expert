import { users } from "./__mocks__/users";

const App = () => {
    
  const getUser = (id: number) => {
    return users.find((user) => user.id === id)?.email;
  };

  return <div>{users.map((user) => getUser(user.id))}</div>;
};

export default App;
