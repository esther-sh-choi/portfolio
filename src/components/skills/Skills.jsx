import React from "react";
import "./skills.scss";

export default function Portfolio({ setOpenMenu }) {
  return (
    <div
      className="portfolio"
      id="portfolio"
      onClick={() => setOpenMenu(false)}
    >
      Portfolio
    </div>
  );
}
