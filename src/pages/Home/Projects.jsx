import React, { useEffect, useState } from "react";
import projects from "../../projects.json";
import { Link } from "react-router-dom";
import Project from "../../components/Project";

const Projects = () => {
  const [maxProjects, setMaxProjects] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const projects = document.querySelector("#home-projects");
      const columns =
        getComputedStyle(projects).gridTemplateColumns.split(" ").length;

      if (columns <= 3) setMaxProjects(6);
      else if (columns === 4) setMaxProjects(8);
      else if (columns === 5) setMaxProjects(10);
      else setMaxProjects(columns);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
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
          A small gallery of recent projects that I have done. Want to see more?
          Visit{" "}
          <Link to="/work" className="work-link">
            my work
          </Link>{" "}
          page.
        </p>
        <Link to="/work" className="aqua-btn see-more">
          See more!
        </Link>
      </div>
      <section id="home-projects" className="projects-gallery">
        {projects.slice(0, maxProjects).map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
