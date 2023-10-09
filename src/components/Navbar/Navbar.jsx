import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/IDR Black Logo 2.png";
import "./module.navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <Link to="/" className="">
          <img src={logo} alt="" className="logo-img" />
        </Link>
      </div>
      <div className="menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </button>
        <div className={`links ${menuOpen ? "open" : ""}`}>
          <Link to="/explore">Explore</Link>
          <Link to="/products">Products</Link>
          <Link to="/about-us">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
