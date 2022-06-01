import React from "react";

import "./navbar.scss";
import "../../global.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="name-logo">
            <p className="logo--first">esther/</p>
            <p className="logo--last">choi</p>
          </a>
          <div className="item-container">
            <FontAwesomeIcon icon={faPhone} className="icon phone-icon" />
            <span>+1-416-729-5604</span>
          </div>
          <div className="item-container">
            <FontAwesomeIcon icon={faEnvelope} className="icon email-icon" />
            <span>estherchoi.sh@gmail.com</span>
          </div>
          <div className="item-container">
            <a href="http://www.linkedin.com/in/esther--choi">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon linkedin-icon"
              />
            </a>
            <span>/esther--choi</span>
          </div>
        </div>
        <div className="right">
          <FontAwesomeIcon icon={faBars} className="icon bars-icon" />
        </div>
      </div>
    </div>
  );
}
