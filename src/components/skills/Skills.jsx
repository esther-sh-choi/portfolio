import React from "react";
import "./skills.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
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
          <img src="" alt="" />
          <h3>HTML5 / CSS3</h3>
        </div>
      </div>
    </div>
  );
}
