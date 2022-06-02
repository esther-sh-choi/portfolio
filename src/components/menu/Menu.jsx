import React from "react";
import "./menu.scss";

function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={`menu ${openMenu && "active"}`}>
      <ul>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#intro">HOME</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#portfolio">SKILLS</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#projects">PROJECTS</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#contact">CONTACT ME</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
