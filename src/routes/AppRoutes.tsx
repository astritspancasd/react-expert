import { Routes, Route } from "react-router-dom";
import { PostList } from "../containers/Post/PostList";
import { PostView } from "../containers/Post/PostView";
import { UserList } from "../containers/User/UserList";
import { UserView } from "../containers/User/UserView";

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
