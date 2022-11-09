import React, { useState, useEffect } from "react";

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
  const [button, setButton] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {}, []);
  window.addEventListener("resize", showButton);

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
          {button && (
            <div className="link-container">
              <ul>
                <li>
                  <a href="#intro">HOME</a>
                </li>
                <li>
                  <a href="#skills">SKILLS</a>
                </li>
                <li>
                  <a href="#projects">PROJECTS</a>
                </li>
                <li>
                  <a href="#contact">CONTACT ME</a>
                </li>
              </ul>
            </div>
          )}
          {!button && (
            <FontAwesomeIcon
              icon={openMenu ? faXmark : faBars}
              className="icon menu-icon"
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
