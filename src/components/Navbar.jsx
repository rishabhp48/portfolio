import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" href="#">
          <span className="logo fab fa-superpowers" />{" "}
          <span style={{ color: "whitesmoke" ,fontFamily:"cursive"}}>Flux Technologies</span>
          <span className="logo fab fa-superpowers" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link " href="#">
              <span>Home</span>
            </Link>
            <Link to="/services" className="nav-item nav-link" href="#">
              <span>Services</span>
            </Link>
            <Link to="/contact" className="nav-item nav-link" href="#">
              <span>Contact</span>
            </Link>
            <Link to="/about" className="nav-item nav-link" href="#">
              <span>About</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
