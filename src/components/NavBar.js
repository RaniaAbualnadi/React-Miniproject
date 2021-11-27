import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
          My Travel Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Homepage
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/CommentsPage"}>
                Comments Page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Register"}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
