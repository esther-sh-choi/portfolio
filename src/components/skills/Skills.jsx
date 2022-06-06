import React, { useState } from "react";
import "./skills.scss";
import SkillsList from "../skillsList/SkillsList";

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
} from "@fortawesome/free-brands-svg-icons";

export default function Portfolio({ setOpenMenu }) {
  const [selected, setSelected] = useState("front");

  const skillTypeList = [
    {
      id: "front",
      title: "Front-End",
      key: 0,
    },
    {
      id: "back",
      title: "Back-End",
      key: 1,
    },
  ];

  const skillsList = [
    { id: 1, title: "HTML5", icon: "faHtml5" },
    {
      id: 2,
      title: "CSS3",
      subtitle: ["Flexbox, Grid", "Animation", "Module"],
      icon: "faCss3",
    },
    { id: 3, title: "Sass", icon: "faSass" },
    { id: 4, title: "JavaScript", subtitle: "ES6+", icon: "faJsSquare" },
    { id: 5, title: "HTML5", icon: "faHtml5" },
    { id: 6, title: "HTML5", icon: "faHtml5" },
  ];

  return (
    <div className="skills" id="skills" onClick={() => setOpenMenu(false)}>
      <h1>Skills</h1>
      <ul>
        {skillTypeList.map((item) => (
          <SkillsList title={item.title} id={item.id} key={item.key} />
        ))}
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
          <h3>JavaScript</h3>
          <h3>ES6</h3>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faReact} className="icon react-icon" />
          <h3>React.js</h3>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faGithubSquare} className="icon github-icon" />
          <h3>Github</h3>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faFigma} className="icon figma-icon" />
          <h3>Figma</h3>
        </div>
      </div>
    </div>
  );
}
