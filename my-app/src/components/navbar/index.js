import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    console.log("Logout successful!");
    navigate("/login");
  };

  return (
    <header>
      <h1>LPU Store</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}

export default Navbar;