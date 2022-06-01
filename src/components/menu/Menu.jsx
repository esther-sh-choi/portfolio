import React from "react";
import "./menu.scss";

function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={`menu ${openMenu && "active"}`}>
      <ul>
        <li>
          <a href="#intro">HOME</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT ME</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
