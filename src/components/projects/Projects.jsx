import React, { useState } from "react";
import "./projects.scss";
import { projects } from "../../projectsData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faDisplay } from "@fortawesome/free-solid-svg-icons";

function Projects({ setOpenMenu }) {
  const [projectIdx, setProjectIdx] = useState(0);

  return (
    <div className="projects" id="projects" onClick={() => setOpenMenu(false)}>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="iconContainer">
                  <FontAwesomeIcon icon={faDisplay} className="icon" />
                  <FontAwesomeIcon icon={faMobileScreen} className="icon" />
                </div>
                <h3>Ladder Game for Indecisive People</h3>
                <span className="project-skill">React.js</span>
                <p>HelloHelloHello</p>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
