import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faTasks } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fw-bold fs-5">
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand" href="#">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/projects" className="nav-link" href="#">
              <FontAwesomeIcon icon={faTasks} />
              &nbsp; Projects
            </Link>
            <Link to="/about" className="nav-link" href="#">
              <FontAwesomeIcon icon={faUserAlt} />
              &nbsp; About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
