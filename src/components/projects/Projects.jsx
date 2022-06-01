import React from "react";
import "./projects.scss";

function Projects({ setOpenMenu }) {
  return (
    <div className="projects" id="projects" onClick={() => setOpenMenu(false)}>
      Projects
    </div>
  );
}

export default Projects;
