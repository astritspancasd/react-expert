import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IF } from '~/components';
import { PostInterface } from '~/models';

type PostProps = {
  post: PostInterface;
  canNavigate?: boolean;
};

export const Post: FC<PostProps> = (props) => {
  const { canNavigate = true } = props;
  const { id, userId, title, body } = props.post;

  return (
    <div>
      <div>Id: {id}</div>
      <div>User id: {userId}</div>
      <div>Title: {title}</div>
      <div>Body: {body}</div>
      <IF condition={canNavigate}>
        <NavLink to={`/post/${id}`}>See Post</NavLink>
      </IF>
      <hr />
    </div>
  );
};
