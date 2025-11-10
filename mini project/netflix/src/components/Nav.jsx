import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        backgroundColor: "#333",
        padding: "15px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
        Login
      </Link>
      <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
        Register
      </Link>
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        🛒 Cart
      </Link>
    </nav>
  );
}

export default Navbar;
