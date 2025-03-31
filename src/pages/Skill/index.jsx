import { useEffect } from "react";
import { letterAnimation } from "../../utils/animation";
import useTitle from "../../hooks/useTitle";
import "./styles.css";

export default function Skill() {
  useTitle("Skills and Experience");

  useEffect(() => {
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
          My web development journey started over two years ago, growing from
          basic websites to more structured and interactive projects. I have
          worked with clients on various web applications and enjoy
          experimenting with new technologies to improve user experiences.
          <br /> <br />
          My expertise lies in front-end development, with a focus on JavaScript
          frameworks, animations, and building responsive, user-friendly
          interfaces. I also enjoy working with tools like GSAP and Three.js to
          add creative touches to websites.
          <br /> <br />
          Check out my{" "}
          <a href="https://github.com/ShibCode?tab=repositories" target="blank">
            GitHub
          </a>{" "}
          to see my work, or feel free to{" "}
          <a href="mailto:shoaibafzaal1234@gmail.com" target="blank">
            contact me
          </a>{" "}
          for any opportunities.
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
          Tailwind CSS
          <div className="bar tailwind"></div>
        </div>
        <div className="skill-bar">
          Javascript
          <div className="bar js"></div>
        </div>
        <div className="skill-bar">
          Typescript
          <div className="bar ts"></div>
        </div>
        <div className="skill-bar">
          React
          <div className="bar react"></div>
        </div>
        <div className="skill-bar">
          Next.js
          <div className="bar next"></div>
        </div>
        <div className="skill-bar">
          GSAP
          <div className="bar gsap"></div>
        </div>
        <div className="skill-bar">
          Three.js
          <div className="bar three"></div>
        </div>
      </div>
    </div>
  );
}
