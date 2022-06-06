import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  let [isOpen, updateIsOpen] = useState(false);
  let navBarClasses = `nav-bar ${isOpen ? "slide-nav" : ""}`;
  let hamMenuClasses = `hammenu-btn-img ${isOpen ? "" : "show"}`;
  let crossClasses = `hammenu-btn-img ${isOpen ? "show" : ""}`;

  return (
    <>
      <button
        className="hammenu-btn"
        onClick={() => {
          updateIsOpen(!isOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} className={hamMenuClasses} />
        <FontAwesomeIcon icon={faClose} className={crossClasses} />
      </button>
      <nav className={navBarClasses}>
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
    </>
  );
}
