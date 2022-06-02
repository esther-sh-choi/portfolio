import React from "react";
import "./intro.scss";

import Button from "../UI/Button";

export default function intro({ setOpenMenu }) {
  return (
    <div className="intro" id="intro" onClick={() => setOpenMenu(false)}>
      <div className="top">
        <div className="intro-name">
          <h1>Hi, I'm</h1>
          <h1 className="name">Esther.</h1>
        </div>
        <div className="intro-sentence">
          <h3>I am a web developer.</h3>
        </div>
      </div>
      <div className="bottom">
        <Button className="outline">Resume</Button>
      </div>
    </div>
  );
}
