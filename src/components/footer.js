import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer mt-5 text-center text-lg-start">
      <div className="text-center pt-3 fw-bold fs-3">
        <a
          href="https://www.linkedin.com/in/moussazouiti/"
          className="text-primary"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {"  "}
        <a href="https://github.com/Moses99Z" className="text-dark">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="text-center pb-3 fw-bold fs-5">
        My Portfolio created using <span className="text-primary">React </span>
        <FontAwesomeIcon className="text-primary" icon={faReact} />
      </div>
    </footer>
  );
};

export default Footer;
