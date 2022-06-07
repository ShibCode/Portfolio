import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { faBars, faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
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
          <Link
            to="/"
            className="name"
            onClick={() => {
              updateIsOpen(false);
            }}
          >
            Shoaib Afzaal
          </Link>
          <p className="title">Web Developer</p>
        </div>
        <div className="nav-links">
          <Link
            to="/about"
            className="nav-link"
            onClick={() => {
              updateIsOpen(false);
            }}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="nav-link"
            onClick={() => {
              updateIsOpen(false);
            }}
          >
            Skills
          </Link>
          <Link
            to="/work"
            className="nav-link"
            onClick={() => {
              updateIsOpen(false);
            }}
          >
            Work
          </Link>
        </div>
        <div className="nav-socials">
          <a
            href="https://github.com/ShibCode?tab=repositories"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="nav-social" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100006041924841"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="nav-social" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=DmwnWrRmTgRLtjRBqhjZpjGBKbBrrMflDlXXjbQfnMzpzckqjTqsZjWHjQRRzkmgkSGSGhBHnPBB"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="nav-social" />
          </a>
        </div>
      </nav>
    </>
  );
}
