import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Work from "./pages/Work";
import PopUp from "./components/PopUp";
import "./utils.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skill />} />
        <Route exact path="/work" element={<Work />} />
      </Routes>
      <PopUp />
    </>
  );
}

export default App;
