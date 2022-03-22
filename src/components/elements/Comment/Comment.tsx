import { FC } from 'react';
import { CommentInterface } from '../../../models/Comment';

type CommentProps = {
  comment: CommentInterface;
};

export const Comment: FC<CommentProps> = (props) => {
  const { postId, id, name, email, body } = props.comment;

  return (
    <div>
      <div>Post id: {postId}</div>
      <div>Id: {id}</div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Body: {body}</div>
    </div>
  );
};
