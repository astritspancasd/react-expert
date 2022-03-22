import { useParams } from 'react-router-dom';
import { Comment } from '../../components/elements/Comment';
import { Post } from '../../components/elements/Post';
import { CommentInterface } from '../../models/Comment';
import { PostInterface } from '../../models/Post';
import { comments } from '../../__mocks__/comments';
import { posts } from '../../__mocks__/posts';

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
