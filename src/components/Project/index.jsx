import React, { useEffect, useRef } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Project = ({ link, img, poster, video, playbackRate = 1 }) => {
  const videoRef = useRef();

  const setProjectTransition = (e) => {
    const { style, clientHeight } = e.target;
    style.transitionDuration = `${clientHeight / 100}s`;
    e.target.classList.add("project");
  };

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.playbackRate = playbackRate;
  }, []);

  const onMouseEnter = () => {
    if (!videoRef.current) return;

    videoRef.current.play();
  };

  const onMouseExit = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <a
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseExit}
      href={link}
      className="project-container"
      target="_blank"
    >
      <div className="project-popup">
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </div>

      <div className="overlay"></div>
      {img && <img src={img} onLoad={setProjectTransition} />}
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      )}
    </a>
  );
};

export default Project;
