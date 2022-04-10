import { useParams } from 'react-router-dom';
import { Comment, Post } from '~/components';
import { CommentInterface, PostInterface } from '~/models';
import { comments, posts } from '~/__mocks__';

export const PostView = () => {
  const { postId } = useParams<{ postId: string }>();

  const post = posts.find(
    (post) => post.id === parseInt(postId as string),
  ) as PostInterface;

  const postComments = comments.filter(
    (comment) => comment.postId === parseInt(postId as string),
  ) as CommentInterface[];

  return (
    <div>
      <Post post={post} canNavigate={false} />
      <p>Comments</p>
      {postComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
