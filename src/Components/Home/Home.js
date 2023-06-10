import { useEffect } from "react";
import { Link } from "react-router-dom";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { letterAnimation } from "../../utils/animation";
import projects from "../../projects.json";
import getTransitionDuration from "../../utils/getTransitionDuration";
import "./Home.css";
import "../../utils.css";

export default function Home() {
  useEffect(() => {
    document.title = "Shoaib | Front End Developer";

    document.querySelector(".section1").scrollIntoView();

    // Letter Animations

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
    <div className="home">
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
        <FontAwesomeIcon
          icon={faArrowDown}
          className="arrow-down right-arrow"
        />
      </section>
      <section className="section2">
        <h1 className="section2-heading heading">
          <span className="letter">M</span>
          <span className="letter">y</span>
          &nbsp;
          <span className="letter">P</span>
          <span className="letter">o</span>
          <span className="letter">r</span>
          <span className="letter">t</span>
          <span className="letter">f</span>
          <span className="letter">o</span>
          <span className="letter">l</span>
          <span className="letter">i</span>
          <span className="letter">o</span>
        </h1>
        <div className="section2-div">
          <p className="section2-para para">
            A small gallery of recent projects that I have done. Want to see
            more? Visit{" "}
            <Link to="/work" className="work-link">
              my work
            </Link>{" "}
            page.
          </p>
          <Link to="/work" className="aqua-btn see-more">
            See more!
          </Link>
        </div>
        <section className="projects-gallery">
          {projects.slice(0, 6).map(({ projectImg, projectLink }, index) => {
            const transitionDuration = getTransitionDuration(projectImg);
            if (transitionDuration === "0s") location.reload();

            return (
              <a
                key={index}
                href={projectLink}
                className="project"
                style={{
                  backgroundImage: `url('${projectImg}')`,
                  transitionDuration: transitionDuration,
                }}
                target="blank"
              ></a>
            );
          })}
        </section>
      </section>
      <section className="section3">
        <h1 className="section3-heading">Contact</h1>
        <p className="section3-para">
          Have a question or want to work together?
        </p>
        <div className="socials">
          <a href="https://github.com/ShibCode?tab=repositories" target="blank">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100006041924841"
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?to=shoaibafzaal1234@gmail.com&fs=1&tf=cm"
            target="blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
        </div>
      </section>
    </div>
  );
}
