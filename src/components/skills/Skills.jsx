import React from "react";
import "./skills.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faSass,
  faBootstrap,
  faNodeJs,
  faFigma,
  faGithubSquare,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio({ setOpenMenu }) {
  return (
    <div className="skills" id="skills" onClick={() => setOpenMenu(false)}>
      <h1>Skills</h1>
      <ul>
        <li className="active">Front-End</li>
        <li>Back-End</li>
        <li>Soft Skills</li>
      </ul>
      <div className="container">
        <div className="item">
          <FontAwesomeIcon icon={faHtml5} className="icon html-icon" />
          <h3>HTML5</h3>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faCss3} className="icon css-icon" />
          <h3>CSS3</h3>
          <h5>Flexbox, Grid</h5>
          <h5>Animation</h5>
          <h5>Module</h5>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faSass} className="icon css-icon" />
          <h3>Sass</h3>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faJsSquare} className="icon js-icon" />
          <h3>JavaScript ES6</h3>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faReact} className="icon react-icon" />
          <h3>React.js</h3>
        </div>
      </div>
    </div>
  );
}
