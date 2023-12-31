import { useEffect } from "react";
import { letterAnimation } from "../../utils/animation";
import useTitle from "../../hooks/useTitle";
import "./styles.css";

export default function About() {
  useTitle("About me");

  useEffect(() => {
    const letters = document.querySelectorAll(".letter");
    const letterArr = [letters];
    letterAnimation(letterArr, letters);
  }, []);

  return (
    <div className="about">
      <div className="about-left">
        <h1 className="about-heading heading">
          <span className="letter">A</span>
          <span className="letter">b</span>
          <span className="letter">o</span>
          <span className="letter">u</span>
          <span className="letter">t</span> <span className="letter">m</span>
          <span className="letter">e</span>
        </h1>
        <p className="about-para para">
          I'm a Front-End Developer located in Pakistan. I have serious passion
          for web developement and creating intuitive and dynamic user
          experiences
        </p>
      </div>
    </div>
  );
}
