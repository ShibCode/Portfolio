import { useEffect } from "react";
import Project from "./Project";
import projects from "../../projects.json";
import "./Work.css";

export default function Work() {
  useEffect(() => {
    document.title = "My Work";
  }, []);

  return (
    <div className="work">
      {projects.map(
        ({ projectImg, projectLink, transitionDuration }, index) => {
          return (
            <Project
              key={index}
              img={projectImg}
              link={projectLink}
              transitionDuration={transitionDuration}
            />
          );
        }
      )}
    </div>
  );
}
