import React from "react";

import "./navbar.scss";
import "../../global.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
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
            <a href="tel:+1-416-729-5604">
              <FontAwesomeIcon icon={faPhone} className="icon phone-icon" />
            </a>
          </div>

          <div className="item-container">
            <a href="mailto: estherchoi.sh@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon email-icon" />
            </a>
          </div>

          <div className="item-container">
            <a
              href="http://www.linkedin.com/in/esther--choi"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon linkedin-icon"
              />
            </a>
          </div>
          <div className="item-container">
            <a
              href="https://github.com/esther-sh-choi"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="icon github-icon"
              />
            </a>
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
