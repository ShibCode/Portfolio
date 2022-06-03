import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
