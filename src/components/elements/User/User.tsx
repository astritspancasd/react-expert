import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { UserInterface } from '~/models';
import { IF } from '~/components';

type UserProps = {
  user: UserInterface;
  canNavigate?: boolean;
};

export const User: FC<UserProps> = (props) => {
  const { canNavigate = true } = props;
  const { id, name, username, email, phone, website, company, address } =
    props.user;

  return (
    <div>
      <div>Id: {id}</div>
      <div>Name: {name}</div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <div>Phone: {phone}</div>
      <div>Website: {website}</div>
      <div>Street: {address.street}</div>
      <div>Company: {company.name}</div>
      <IF condition={canNavigate}>
        <NavLink to={`/user/${id}`}>See User</NavLink>
      </IF>
      <hr />
    </div>
  );
};
