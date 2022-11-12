import React, { useEffect, useState } from "react";

import Menu from "../menu/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { menuList } from "./menuList";
import { contactMethods } from "../../contactMethods";

import "./navbar.scss";
import "../../global.scss";

export default function Navbar({ openMenu, setOpenMenu }) {
  const [button, setButton] = useState();

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <div className="navbar-container">
      <div className={`navbar ${openMenu && "active"}`}>
        <div className="left">
          <a href="#intro" className="name-logo">
            <p className="logo--first">esther/</p>
            <p className="logo--last">choi</p>
          </a>
          {contactMethods.map((info) => (
            <div key={info.id} className="item-container">
              <a href={info.href} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={info.icon} className={info.id} />
              </a>
            </div>
          ))}
        </div>
        <div className="right">
          {button && (
            <div className="link-container">
              <ul>
                {menuList.map((menuItem, index) => (
                  <li key={`${menuItem.label}${index}`}>
                    <a href={menuItem.href}>{menuItem.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!button && (
            <FontAwesomeIcon
              icon={openMenu ? faXmark : faBars}
              className="icon menu-icon"
              style={{ zIndex: 10 }}
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </div>
      </div>
      <Menu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        className="navbar-menu"
      />
    </div>
  );
}
