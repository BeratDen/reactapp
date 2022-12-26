import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Home/Login";
import SignUp from "./Home/SignUp";
import Home from "./Home/Home";
import ArticleHome from "./Articles/ArticleHome";
import UpdateUser from "./Home/UpdateUser";

function Navbar(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<ArticleHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route
          exact
          path="/users/edit/:id"
          element={<UpdateUser></UpdateUser>}
        />
      </Routes>
    </Router>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Default App",
};
export default Navbar;
