import { useEffect } from "react";
import Project from "./Project";
import projects from "../../projects.json";
import "./Work.css";

export default function Work() {
  useEffect(() => {
    document.title = "My work";
  }, []);

  return (
    <div className="work">
      {projects.map(({ projectImg, projectLink }, index) => {
        return <Project key={index} img={projectImg} link={projectLink} />;
      })}
    </div>
  );
}
