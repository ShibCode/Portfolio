import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../utils.css";
import "./Home.css";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { letterAnimation } from "../../animation";

export default function Home() {
  useEffect(() => {
    document.querySelector(".section1").scrollIntoView();

    // Pop Ups

    const popUp1 = document.querySelector(".pop-up-1");
    const popUp2 = document.querySelector(".pop-up-2");
    const allPopUps = document.querySelectorAll(".pop-up");

    allPopUps.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.remove("show-pop-up");
        if (!popUp2.classList.contains("show-pop-up")) {
          popUp1.classList.remove("move-pop-up-1");
        }
      });
    });

    setTimeout(() => {
      popUp1.classList.add("show-pop-up");

      setTimeout(() => {
        popUp1.classList.add("move-pop-up-1");
        popUp2.classList.add("show-pop-up");

        setTimeout(() => {
          popUp1.classList.remove("show-pop-up");

          setTimeout(() => {
            popUp2.classList.remove("show-pop-up");
          }, 2500);
        }, 2500);
      }, 2500);
    }, 1000);

    // Letter Animations

    const letters = document.querySelectorAll(".letter");
    const section1Letters = document.querySelectorAll(
      ".section1-heading .letter"
    );
    const section2Letters = document.querySelectorAll(
      ".section2-heading .letter"
    );
    const section3Letters = document.querySelectorAll(
      ".section3-heading .letter"
    );
    let lettersArr = [];
    lettersArr.push(section1Letters);
    lettersArr.push(section2Letters);
    lettersArr.push(section3Letters);

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
        <button className="aqua-btn contact-btn">Contact me!</button>
        <p className="scroll-down left-text">
          <span className="scroll-down-text">scroll down</span>
        </p>
        <p className="scroll-down right-text">
          <span className="scroll-down-text">scroll down</span>
        </p>
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
          <a
            href="https://moz-clone.vercel.app/"
            className="project project1"
            target="_blank"
          ></a>
          <a
            href="https://space-tourism-website-hazel.vercel.app/"
            className="project project2"
            target="_blank"
          ></a>
          <a
            href="https://e-commerce-website-eosin.vercel.app/"
            className="project project3"
            target="_blank"
          ></a>
          <a
            href="https://huddle-landing-page-gilt.vercel.app/"
            className="project project4"
            target="_blank"
          ></a>
          <a
            href="https://flocked-landing-clone.vercel.app/"
            className="project project5"
            target="_blank"
          ></a>
          <a
            href="https://r3-com-clone.vercel.app/"
            className="project project6"
            target="_blank"
          ></a>
        </section>
      </section>
      <section className="section3">
        <h1 className="section3-heading">Contact</h1>
        <p className="section3-para">
          Have a question or want to work together?
        </p>
        <div className="socials">
          <a
            href="https://www.facebook.com/profile.php?id=100006041924841"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://github.com/ShibCode?tab=repositories"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=DmwnWrRmTgRLtjRBqhjZpjGBKbBrrMflDlXXjbQfnMzpzckqjTqsZjWHjQRRzkmgkSGSGhBHnPBB"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
        </div>
      </section>
      <div className="pop-up pop-up-1">
        Please note that this design is not mine
      </div>
      <div className="pop-up pop-up-2">Only the code</div>
    </div>
  );
}
