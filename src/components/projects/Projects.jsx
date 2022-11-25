import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../UI/Modal";
import { projects } from "../../projectsData";

import "./projects.scss";

function Projects({ setOpenMenu }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [openDetailModal, setOpenDetailModal] = useState(false);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 2;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? slideHandler("right") : slideHandler("left");
    }
  };

  const slideHandler = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide)
      : setCurrentSlide(
          currentSlide === projects.length - 1 ? currentSlide : currentSlide + 1
        );
  };

  const handleClickDetail = () => {
    setOpenDetailModal(true);
  };

  return (
    <div className="projects" id="projects" onClick={() => setOpenMenu(false)}>
      <h1>.projects</h1>

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
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((project) => (
            <div className="container" key={project.id}>
              <div className="item">
                <div className="description">
                  <div className="iconContainer">
                    {project.icon.map((element, i) => (
                      <span key={`${element.label}${i}`} className="icon-bg">
                        <FontAwesomeIcon
                          icon={element.label}
                          className="icon"
                          alt={element.alt}
                          key={`${(element.label, i)}`}
                        />
                      </span>
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
                  <p>
                    {project.description}
                    <button
                      className="more-detail-btn"
                      id={project.id}
                      onClick={handleClickDetail}
                    >
                      Click here for more detail
                    </button>
                  </p>
                  <div className="btnContainer">
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="visit">VISIT SITE</button>
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>VIEW CODE</button>
                    </a>
                  </div>
                </div>
                <div className="image">
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
          styles={{
            display: currentSlide === projects.length - 1 ? "none" : "inline",
          }}
        />
      </div>
      <div className="counters">
        {projects.map((project, i) => (
          <span
            key={`${project}${i}`}
            className={`project${i}`}
            style={{
              backgroundColor:
                i === currentSlide ? "rgb(70, 59, 125)" : "white",
            }}
          />
        ))}
      </div>
      {openDetailModal && (
        <Modal onConfirm={() => setOpenDetailModal(false)}></Modal>
      )}
    </div>
  );
}

export default Projects;
