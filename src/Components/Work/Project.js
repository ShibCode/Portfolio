import React from "react";

export default function Project({ project, projectClass, projectLink, sno }) {
  const classes = `work-project ${projectClass}`;

  return (
    <a href={projectLink} className="work-project-container" target="_blank">
      <div className="overlay"></div>
      <img src={project} className={classes} />
    </a>
  );
}
