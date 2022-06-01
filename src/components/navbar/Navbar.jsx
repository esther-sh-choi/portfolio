import React from "react";

import "./navbar.scss";
import "../../global.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ openMenu, setOpenMenu }) {
  return (
    <div className={`navbar ${openMenu && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="name-logo">
            <p className="logo--first">esther/</p>
            <p className="logo--last">choi</p>
          </a>
          <div className="item-container">
          <a href=”tel:+1-877-538-5888″><FontAwesomeIcon icon={faPhone} className="icon phone-icon" /></a>
            <span>+1-416-729-5604</span>
          </div>
          <div className="item-container">
            <FontAwesomeIcon icon={faEnvelope} className="icon email-icon" />
            <span>estherchoi.sh@gmail.com</span>
          </div>
          <div className="item-container">
            <a href="http://www.linkedin.com/in/esther--choi" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon linkedin-icon"
              />
            </a>
            <span>/esther--choi</span>
          </div>
        </div>
        <div className="right">
          <FontAwesomeIcon
            icon={openMenu ? faXmark : faBars}
            className="icon menu-icon"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      </div>
    </div>
  );
}
