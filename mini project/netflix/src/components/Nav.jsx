import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MySite</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Services</Link>
        <Link to="#">Contact</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;