import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Work from "./Components/Work/Work";
import PopUp from "./Components/PopUp/PopUp";

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
      <PopUp />
    </Router>
  );
}

export default App;
