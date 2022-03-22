import { PostInterface } from '../../models/Post';
import { UserInterface } from '../../models/User';
import { posts } from '../../__mocks__/posts';
import { users } from '../../__mocks__/users';
import { useParams } from 'react-router-dom';
import { Post } from '../../components/elements/Post';
import { User } from '../../components/elements/User';

export const UserView = () => {
  const { userId } = useParams<{ userId: string }>();

  const user = users.find(
    (user) => user.id === parseInt(userId as string),
  ) as UserInterface;

  const userPosts = posts.filter(
    (post) => post.userId === parseInt(userId as string),
  ) as PostInterface[];

  return (
    <div>
      <User user={user} canNavigate={false} />
      <p>Posts</p>
      {userPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
