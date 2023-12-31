import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export default function Header() {
  let [isOpen, updateIsOpen] = useState(false);

  return (
    <>
      <button className="hammenu-btn" onClick={() => updateIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faClose : faBars} />
      </button>
      <nav className={`nav-bar ${isOpen ? "slide-nav" : ""}`}>
        <div className="nav-bar-top">
          <Link to="/" className="name" onClick={() => updateIsOpen(false)}>
            Shoaib Afzaal
          </Link>
          <p className="title">Web Developer</p>
        </div>
        <div className="nav-links">
          <Link
            to="/about"
            className="nav-link"
            onClick={() => updateIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="nav-link"
            onClick={() => updateIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/work"
            className="nav-link"
            onClick={() => updateIsOpen(false)}
          >
            Work
          </Link>
        </div>
        <div className="nav-socials">
          <a href="https://github.com/ShibCode?tab=repositories" target="blank">
            <FontAwesomeIcon icon={faGithub} className="nav-social" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100006041924841"
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="nav-social" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?to=shoaibafzaal1234@gmail.com&fs=1&tf=cm"
            target="blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="nav-social" />
          </a>
        </div>
      </nav>
    </>
  );
}
