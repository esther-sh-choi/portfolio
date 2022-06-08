import React, { useState, useEffect } from "react";
import "./projects.scss";
import { projects } from "../../projectsData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Projects({ setOpenMenu }) {
  const [projectIdx, setProjectIdx] = useState(0);
  const [project, setProject] = useState(projects[projectIdx]);

  useEffect(() => {
    setProject(projects[projectIdx]);
  }, [projectIdx]);

  const rightProjectHandler = () => {
    if (projectIdx + 1 < projects.length) {
      setProjectIdx(projectIdx + 1);
    } else {
      setProjectIdx(0);
    }
  };

  const leftProjectHandler = () => {
    if (projectIdx === 0) {
      console.log("hello");
      setProjectIdx(projects.length - 1);
    } else {
      setProjectIdx(projectIdx - 1);
    }
  };

  return (
    <div className="projects" id="projects" onClick={() => setOpenMenu(false)}>
      <div className="slider">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow left"
          alt="left-arrow"
          onClick={leftProjectHandler}
        />
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="iconContainer">
                  {project.icon.map((element, i) => (
                    <FontAwesomeIcon
                      icon={element}
                      className="icon"
                      alt="icon display"
                      key={`${(element, i)}`}
                    />
                  ))}
                </div>

                <h3>{project.title}</h3>
                <div className="skillsContainer">
                  {project.skills.map((skill) => (
                    <span
                      className="project-skill"
                      key={`${project.id}${skill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p>{project.description}</p>
                <ul className="tech-list">
                  {project.technology.map((content, i) => (
                    <li key={`${project.id}${i}`}>{content}</li>
                  ))}
                </ul>

                <div className="btnContainer">
                  <a
                    href="https://adorable-stroopwafel-9cc3ff.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="visit">VISIT</button>
                  </a>
                  <a
                    href="https://github.com/esther-sh-choi/ladder-game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>CODE</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={project.image.src} alt={project.image.alt} />
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow right"
          alt="right-arrow"
          onClick={rightProjectHandler}
        />
      </div>
    </div>
  );
}

export default Projects;
