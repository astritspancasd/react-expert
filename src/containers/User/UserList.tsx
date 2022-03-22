import { User } from '~/components';
import { users } from '~/__mocks__';

export const UserList = () => {
  return (
    <>
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
};
