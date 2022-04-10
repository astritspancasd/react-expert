import { Routes, Route, Navigate } from 'react-router-dom';
import {
  UserList,
  UserView,
  PostView,
  PostList,
  Login,
  Register,
} from '~/containers';
import { useAuthContext } from '~/providers';

export const AppRoutes = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <div>
      <Routes>
        {isAuthenticated && (
          <>
            <Route path="/posts" element={<PostList />} />
            <Route path="/post/:postId" element={<PostView />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<UserView />} />
            <Route path="*" element={<Navigate to="/posts" replace />} />
          </>
        )}
        {!isAuthenticated && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </div>
  );
};
