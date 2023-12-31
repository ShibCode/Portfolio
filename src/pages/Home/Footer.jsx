import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <section className="section3">
      <h1 className="section3-heading">Contact</h1>
      <p className="section3-para">Have a question or want to work together?</p>
      <div className="socials">
        <a href="https://github.com/ShibCode?tab=repositories" target="blank">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006041924841"
          target="blank"
        >
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?to=shoaibafzaal1234@gmail.com&fs=1&tf=cm"
          target="blank"
        >
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
