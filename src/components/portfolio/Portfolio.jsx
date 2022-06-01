import React from "react";
import "./portfolio.scss";

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
