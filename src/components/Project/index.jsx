import React from "react";
import "./styles.css";

const Project = ({ link, img }) => {
  const setProjectTransition = (e) => {
    const { style, clientHeight } = e.target;
    style.transitionDuration = `${clientHeight / 100}s`;
    e.target.classList.add("project");
  };

  return (
    <a href={link} className="project-container" target="_blank">
      <div className="overlay"></div>
      <img src={img} onLoad={setProjectTransition} />
    </a>
  );
};

export default Project;
