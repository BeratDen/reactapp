import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Home/Login";
import SignUp from "./Home/SignUp";
import Home from "./Home/Home";
import ArticleHome from "./Articles/ArticleHome";

function Navbar(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<ArticleHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
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
