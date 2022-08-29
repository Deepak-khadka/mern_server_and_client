import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="home" className="navbar-brand">
          MERN TUTORIAL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active"></li>
            <li className="nav-item">
              <Link className="nav-link" to={"/user"}>
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category"}>
                Category
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
