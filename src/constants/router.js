import React from "react";
import App from "../App";
import PostsManager from "../pages/postsManager";
import { Route, Routes }  from 'react-router-dom';


export default function Router () {
    return (
        <Routes>
            <Route exact path="/" element={<App />}>
            <Route path="posts-manager" element={<PostsManager />} />
            </Route>
        </Routes>
    );
};