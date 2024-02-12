import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import PostList from "pages/PostList.tsx";
import PostDetail from "pages/PostDetail.tsx";
import PostNew from "pages/PostNew.tsx";
import PostEdit from "pages/PostEdit";
import Profile from "pages/Profile";
import Signup from "pages/Signup";
import Login from "pages/Login";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({isAuthenticated}: RouterProps) {
  
  return (
    <Routes>
      { isAuthenticated ?
        <>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
        :
        <>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </>
      }
    </Routes>
   );
}