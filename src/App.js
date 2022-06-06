import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Work from "./Components/Work/Work";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skill />} />
        <Route exact path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
