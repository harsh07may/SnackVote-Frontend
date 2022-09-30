import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img className="nav-logo" src={Logo} alt="Logo" />
      <NavLink className="nav-link" to="/" end>
        Home
      </NavLink>
      <NavLink className="nav-link" to="/Menu">
        Menu
      </NavLink>
      <NavLink className="nav-link" to="/Status">
        Status
      </NavLink>
      <NavLink className="nav-link" to="/">
        <Button
          style={{ backgroundColor: "#80CC28" }}
          type="primary"
          size="medium"
        >
          Sign In
        </Button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
