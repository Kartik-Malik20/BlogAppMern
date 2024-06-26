import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import Projects from "./Pages/Projects";
import Header from "./Components/Header";
import BlogFooter from "./Components/BlogFooter";
import PrivateRoute from "./Components/PrivateRoute";
import CreatePost from "./Pages/CreatePost";
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute";
import UpdatePost from "./Pages/UpdatePost";
import PostPage from "./Pages/PostPage";
import { ScrollToTop } from "./Components/ScrollToTop";
import Search from "./Pages/Search";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
      </Routes>
      <BlogFooter />
    </BrowserRouter>
  );
}
