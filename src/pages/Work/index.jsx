import Project from "../../components/Project";
import projects from "../../projects.json";
import useTitle from "../../hooks/useTitle";
import "./styles.css";

export default function Work() {
  useTitle("My Work");

  return (
    <div className="work">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
