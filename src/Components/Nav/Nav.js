import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-top">
        <Link to="/" className="name">
          Shoaib Afzaal
        </Link>
        <p className="title">Web Developer</p>
      </div>
      <div className="nav-links">
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/skills" className="nav-link">
          Skills
        </Link>
        <Link to="/work" className="nav-link">
          Work
        </Link>
      </div>
    </nav>
  );
}
