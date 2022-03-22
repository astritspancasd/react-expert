import { Post } from '~/components';
import { posts } from '~/__mocks__';

export const PostList = () => {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
