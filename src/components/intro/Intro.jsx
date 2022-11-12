import React from "react";
import "./intro.scss";

import Button from "../UI/Button";
import TypeIt from "typeit-react";

import image from "../../images/intro-img.png";

function Intro({ setOpenMenu }) {
  return (
    <div className="intro" id="intro" onClick={() => setOpenMenu(false)}>
      <div className="intro-name">
        <h1 className="hi">Hi, I'm</h1>
        <h1 className="name">Esther.</h1>
      </div>
      <div className="intro-sentence">
        <TypeIt
          cursorchar={<div className="typing-cursor">|</div>}
          options={{ loop: true }}
          getBeforeInit={(instance) => {
            instance
              .type("I am a software developer.")
              .pause(1200)
              .delete(26)
              .pause(500)
              .type("I love to code.")
              .pause(1200);

            return instance;
          }}
          className="role"
        />
      </div>
      <div className="intro-image-container">
        <img className="intro-image" src={image} alt="laptop-illustration" />
      </div>
      <Button className="outline resume-btn">Resume</Button>
    </div>
  );
}

export default Intro;
