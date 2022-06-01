import React from "react";
import "./intro.scss";

export default function intro({ setOpenMenu }) {
  return (
    <div className="intro" id="intro" onClick={() => setOpenMenu(false)}>
      intro
    </div>
  );
}
