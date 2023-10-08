import { useEffect } from "react";
import { letterAnimation } from "../../utils/animation";
import "./Skill.css";

export default function Skill() {
  useEffect(() => {
    document.title = "Skills and Experience";

    const letters = document.querySelectorAll(".letter");
    const letterArr = [letters];
    letterAnimation(letterArr, letters);
  }, []);

  return (
    <div className="skill">
      <div className="skill-left">
        <h1 className="heading skill-heading">
          <span className="letter">S</span>
          <span className="letter">k</span>
          <span className="letter">i</span>
          <span className="letter">l</span>
          <span className="letter">l</span>
          <span className="letter">s</span> <span className="letter">&</span>
          <br />
          <span className="letter">E</span>
          <span className="letter">x</span>
          <span className="letter">p</span>
          <span className="letter">e</span>
          <span className="letter">r</span>
          <span className="letter">i</span>
          <span className="letter">e</span>
          <span className="letter">n</span>
          <span className="letter">c</span>
          <span className="letter">e</span>
        </h1>
        <p className="para skill-para">
          I started off my web development journey a year ago. I have some
          experience working on actual projects for my clients. Apart from this,
          I have cloned multiple websites and have took on various different
          challenges from Front End Mentor to polish my skills.
          <br /> <br />I create successful responsive websites that are fast and
          easy to use. The main area of my expertise is front-end development,
          HTML, CSS, JS, building small and medium web apps, custom plugins,
          features, animations, and coding interactive layouts.
          <br />
          <br />
          Vist my{" "}
          <a href="https://github.com/ShibCode?tab=repositories" target="blank">
            Github
          </a>{" "}
          for viewing my work or just{" "}
          <a
            href="https://mail.google.com/mail/u/0/?to=shoaibafzaal1234@gmail.com&fs=1&tf=cm"
            target="blank"
          >
            contact
          </a>{" "}
          me
        </p>
      </div>
      <div className="skill-right">
        <div className="skill-bar">
          HTML
          <div className="bar html"></div>
        </div>
        <div className="skill-bar">
          CSS
          <div className="bar css"></div>
        </div>
        <div className="skill-bar">
          Javascript
          <div className="bar js"></div>
        </div>
        <div className="skill-bar">
          React
          <div className="bar react"></div>
        </div>
        <div className="skill-bar">
          Tailwind CSS
          <div className="bar tailwind"></div>
        </div>
        <div className="skill-bar">
          Next.js
          <div className="bar next"></div>
        </div>
      </div>
    </div>
  );
}
