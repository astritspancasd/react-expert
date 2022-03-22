import { User } from '../../components/elements/User';
import { users } from '../../__mocks__/users';

export const UserList = () => {
  return (
    <>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
};
