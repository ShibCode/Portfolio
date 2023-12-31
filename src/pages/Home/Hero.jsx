import React, { useEffect } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { letterAnimation } from "../../utils/animation";

const Hero = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");
    const section1Letters = document.querySelectorAll(
      ".section1-heading .letter"
    );
    const section2Letters = document.querySelectorAll(
      ".section2-heading .letter"
    );
    const lettersArr = [section1Letters, section2Letters];

    letterAnimation(lettersArr, letters);
  }, []);

  return (
    <section className="section1">
      <h1 className="section1-heading heading">
        <span className="letter">H</span>
        <span className="letter">i</span>
        <span className="letter">,</span>
        <br />
        <span className="letter">I</span>
        <span className="letter">'</span>
        <span className="letter">m</span> <span className="letter">S</span>
        <span className="letter">h</span>
        <span className="letter">o</span>
        <span className="letter">a</span>
        <span className="letter">i</span>
        <span className="letter">b</span>
        <span className="letter">,</span>
        <br />
        <span className="letter">W</span>
        <span className="letter">e</span>
        <span className="letter">b</span> <span className="letter">D</span>
        <span className="letter">e</span>
        <span className="letter">v</span>
        <span className="letter">e</span>
        <span className="letter">l</span>
        <span className="letter">o</span>
        <span className="letter">p</span>
        <span className="letter">e</span>
        <span className="letter">r</span>
      </h1>

      <h4 className="section1-title">Front End Developer</h4>
      <button className="aqua-btn contact-btn">
        <a
          href="https://mail.google.com/mail/u/0/?to=shoaibafzaal1234@gmail.com&fs=1&tf=cm"
          style={{ color: "inherit", textDecoration: "none" }}
          target="blank"
        >
          Contact me!
        </a>
      </button>
      <p className="scroll-down left-text">
        <span className="scroll-down-text">scroll down</span>
      </p>
      <FontAwesomeIcon icon={faArrowDown} className="arrow-down left-arrow" />
      <p className="scroll-down right-text">
        <span className="scroll-down-text">scroll down</span>
      </p>
      <FontAwesomeIcon icon={faArrowDown} className="arrow-down right-arrow" />
    </section>
  );
};

export default Hero;
