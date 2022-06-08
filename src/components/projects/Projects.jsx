import React, { useState } from "react";
import "./projects.scss";
import { projects } from "../../projectsData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faDisplay,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import ladderDemo from "../../images/ladder-demo.gif";

function Projects({ setOpenMenu }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="projects" id="projects" onClick={() => setOpenMenu(false)}>
      <div className="slider">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow left"
          alt="left-arrow"
        />
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="iconContainer">
                  <FontAwesomeIcon
                    icon={faDisplay}
                    className="icon"
                    alt="Desktop Display"
                  />
                  <FontAwesomeIcon
                    icon={faMobileScreen}
                    className="icon"
                    alt="Mobile Display"
                  />
                </div>

                <h3>Ladder Game for Indecisive People</h3>
                <div className="skillsContainer">
                  <span className="project-skill">React.js</span>
                </div>

                <p>HelloHelloHello</p>
                <div className="btnContainer">
                  <button className="visit">VISIT</button>
                  <button>CODE</button>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={ladderDemo} alt="Ladder game demo thumbnail" />
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow right"
          alt="right-arrow"
        />
      </div>
    </div>
  );
}

export default Projects;
