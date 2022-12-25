import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-dark">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/Articles" className="nav-link px-2 link-dark">
                Makaleler
              </Link>
            </li>
          </ul>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Link to="/login">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
            </Link>

            <Link to="/sign-up">
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
