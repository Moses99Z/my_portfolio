import React from "react";
import picture from "../images/profile_picture.jpg";
import kotlin from "../images/kotlin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
  faJava,
  faAndroid,
  faNodeJs,
  faHtml5,
  faBootstrap,
  faCss3,
  faJs,
  faPhp,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

const About = () => {
  return (
    <div className="page">
      <div className="container ">
        <div className="row border shadow-sm mb-5 about mx-1">
          <h2 className="fw-bold text-center pt-4">About Me</h2>
          <div className="col-lg-3 col-12 pb-4 text-center">
            <img
              alt="profile_picture"
              className="rounded-circle text-center"
              src={picture}
              style={{ width: 170, height: 220 }}
            />
          </div>
          <div className="col-sm-9 col-12 pt-4">
            <p className="fw-light fs-4">
              Hi, I'm Zouiti Moussa, I'm a web / mobile apps developer &
              programmer from Morocco. <br />I enjoy taking complex problems and
              turning them into simple and beautiful interface designs, I also
              love the logic and structure of coding and always strive to write
              elegant and efficient code.
            </p>
            <a className="btn btn-dark mb-4" href="https://github.com/Moses99Z">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            &nbsp;&nbsp;&nbsp;
            <a
              className="btn btn-primary mb-4"
              href="https://www.linkedin.com/in/moussazouiti/"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="row shadow-sm text-center mb-5 about-tech mx-1">
          <div className="col-sm-6 col-12 pt-5 pb-3 border border-1">
            <h2 className="fw-bold">Web Development</h2>
            <FontAwesomeIcon className="fs-2 mt-3" icon={faCode} />
            <p className="fs-4 text-primary mt-3">Technologies I know :</p>
            <FontAwesomeIcon
              className="fs-2 m-2 mt-2 text-danger"
              icon={faHtml5}
            />
            <FontAwesomeIcon className="fs-2 m-2 text-primary" icon={faCss3} />
            <FontAwesomeIcon className="fs-2 m-2 text-warning" icon={faJs} />
            <FontAwesomeIcon
              className="fs-2 m-2 text-secondary "
              icon={faPhp}
            />
            <br />
            <FontAwesomeIcon className="fs-2 m-2 text-primary" icon={faReact} />
            <FontAwesomeIcon
              className="fs-2 m-2 text-success"
              icon={faNodeJs}
            />
            <FontAwesomeIcon
              className="fs-2 m-2 text-danger"
              icon={faLaravel}
            />
            <br />
            <FontAwesomeIcon
              className="fs-2 m-2"
              icon={faBootstrap}
              style={{ color: "purple" }}
            />
            <br />
          </div>
          <div className="col-sm-6 col-12 pt-5 border border-1 pb-2">
            <h2 className="fw-bold">Mobile Development</h2>
            <FontAwesomeIcon className="fs-2 m-3" icon={faMobileAlt} />
            <p className=" fs-4 text-primary mt-3">Technologies I know :</p>
            <FontAwesomeIcon className="fs-2  text-success" icon={faAndroid} />
            <br />
            <FontAwesomeIcon className="fs-2 m-2 text-danger" icon={faJava} />
            <br />
            <img
              alt="kotlin"
              className="m-2"
              src={kotlin}
              style={{ height: 30, width: 30 }}
            />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
