import React, { useState } from "react";
import "./projects.scss";
import { projects } from "../../projectsData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Projects({ setOpenMenu }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideHandler = (direction) => {
    direction === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : projects.length - 1
        )
      : setCurrentSlide(
          currentSlide === projects.length - 1 ? 0 : currentSlide + 1
        );
  };

  return (
    <div className="projects" id="projects" onClick={() => setOpenMenu(false)}>
      <h1>Projects</h1>

      <div className="mainContainer">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="arrow left"
          alt="left-arrow"
          onClick={() => slideHandler("left")}
        />
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {projects.map((project) => (
            <div className="container" key={project.id}>
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
                        href={project.links.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="visit">VISIT</button>
                      </a>
                      <a
                        href={project.links.github}
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
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="arrow right"
          alt="right arrow"
          onClick={() => slideHandler()}
        />
      </div>
      <div className="counters">
        {projects.map((project, i) => (
          <span
            className={`project${i}`}
            style={{
              backgroundColor: i === currentSlide ? "#fff" : "rgb(70, 59, 125)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
