import React from "react";

import namelogo from "../../images/name-logo.png";
import "./navbar.scss";
import "../../global.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="name-logo">
            <p className="logo--first">esther\</p>
            <p className="logo--last">choi</p>
          </a>
        </div>
        <div className="right">This is right</div>
      </div>
    </div>
  );
}
