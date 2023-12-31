import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";
import useTitle from "../../hooks/useTitle";
import "./styles.css";

export default function Home() {
  useTitle("Shoaib | Front End Developer");

  return (
    <div className="home">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
