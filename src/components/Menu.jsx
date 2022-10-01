import React from "react";
import "./Menu.css";
import { Button } from "antd";
import "antd/dist/antd.css";
import left from "../assets/left.png";
import right from "../assets/right.png";
const Menu = () => {
  return(
    <div className="menu-flexbox">
      <img src={left} alt="" />
      <div className="menu-middle">
        <h2>Today's Menu</h2>
        <p>Check out the Menu and Vote</p>
        <div className="menu-button-flex">
        <Button
          style={{ backgroundColor: "#80CC28", borderColor:"#80CC28",margin:"0px 20px"}}
          type="primary"
          size="medium"
        >
          Sign In
        </Button>
        <Button
          style={{ backgroundColor: "#80CC28", borderColor:"#80CC28",margin:"0px 20px"}}
          type="primary"
          size="medium"
        >
          Sign In
        </Button>
        </div>
      </div>
      <img src={right} alt="" />
    </div>
  )
};

export default Menu;
