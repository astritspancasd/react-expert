import { Routes, Route } from 'react-router-dom';
import { UserList, UserView, PostView, PostList, ObserverList } from '~/containers';

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/post/:postId" element={<PostView />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<UserView />} />
        <Route path="/observers" element={<ObserverList />} />
      </Routes>
    </div>
  );
};
