import { Routes, Route } from 'react-router-dom';
import { UserList, UserView, PostView, PostList } from '~/containers';

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/post/:postId" element={<PostView />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<UserView />} />
      </Routes>
    </div>
  );
};
