import React from "react";
import "./intro.scss";

import Button from "../UI/Button";
import TypeIt from "typeit-react";

function Intro({ setOpenMenu }) {
  return (
    <div className="intro" id="intro" onClick={() => setOpenMenu(false)}>
      <div className="top">
        <div className="intro-name">
          <h1>Hi, I'm</h1>
          <h1 className="name">Esther.</h1>
        </div>
        <div className="intro-sentence">
          <h3>
            I am a{" "}
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("software developer")
                  .pause(1200)
                  .delete(18)
                  .pause(500)
                  .type("front-end developer")
                  .pause(1200);

                return instance;
              }}
              className="role"
            />
            .
          </h3>
        </div>
      </div>
      <div className="bottom">
        <Button className="outline">Resume</Button>
      </div>
    </div>
  );
}

export default Intro;
