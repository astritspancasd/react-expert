import React from "react";
import { Routes, Route } from "react-router-dom";
import { PostsList } from "../containers/Posts/PostsList";
import { PostView } from "../containers/Posts/PostView";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/post/:postId" element={<PostView />} />
      </Routes>
    </div>
  );
};
