import React from "react";

import { menuList } from "../navbar/menuList";

import "./menu.scss";

function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={`menu ${openMenu && "active"}`}>
      <ul>
        {menuList.map((menuItem, index) => (
          <li
            key={`${menuItem.label}${index}`}
            onClick={() => setOpenMenu(false)}
          >
            <a href={menuItem.href}>{menuItem.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
