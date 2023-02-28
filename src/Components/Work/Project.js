import React from "react";
import getTransitionDuration from "../../utils/getTransitionDuration";

export default function Project({ img, link }) {
  return (
    <a href={link} className="work-project-container" target="_blank">
      <div className="overlay"></div>
      <img
        src={img}
        className="work-project"
        style={{
          transitionDuration: getTransitionDuration(img),
        }}
      />
    </a>
  );
}
