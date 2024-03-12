import React from "react";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoNero">
        <img
          className="logo"
          src={require("../assets/auto-intelli-logo.png")}
          alt="cc"
        />
      </div>
      <div className="icon">
        <CiSearch className="search" />
        <Link to={"/login"} className="login">
          Log in
        </Link>
        <button className="DemoBtn">Get Demo</button>
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default Navbar;
