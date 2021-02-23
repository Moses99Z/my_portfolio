import React from "react";
import kotlin from "../images/kotlin.png";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faReact,
  faGithub,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = useSelector((state) => state.projects);
  const project = projects.filter(
    (project) => id.toString() === project.id.toString()
  )[0];

  return (
    <div className="page container mt-2 ">
      <div
        className="row border shadow-sm project-det d-flex align-items-center"
        style={{ marginBottom: "150px" }}
      >
        <div className="col-sm-6 col-12 p-5">
          <h2 className="fw-bold">{project.name}</h2>
          {projectType(project)}
          <p style={{ fontSize: 18 }}>{project.details}</p>

          <a className="btn btn-dark" href={project.githubLink}>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
        <div className="col-sm-6 col-12 p-5">
          {project.imagesDetails.map((image, index) => {
            return (
              <img key={index} className="imgdetail" src={image} alt={"img"} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

function projectType(p) {
  switch (p.type) {
    case "android":
      if (p.language === "java") {
        return (
          <p className="card-text text-success fs-6 fw-bold">
            <FontAwesomeIcon className="text-danger" icon={faJava} /> &nbsp;
            <span className="text-danger">JAVA</span> &nbsp;&nbsp;
            <FontAwesomeIcon icon={faAndroid} /> ANDROID
          </p>
        );
      } else if (p.language === "kotlin") {
        return (
          <p className="card-text text-success fw-bold">
            <img
              alt="kotlin"
              className="m-2"
              src={kotlin}
              style={{ height: 20, width: 20 }}
            />
            <span style={{ color: "orange" }}>KOTLIN</span> &nbsp;&nbsp;
            <FontAwesomeIcon icon={faAndroid} /> ANDROID
          </p>
        );
      }
      break;

    case "react":
      return (
        <p className="card-text text-primary fw-bold">
          <span style={{ color: "red" }}>REDUX</span> &nbsp;&nbsp;
          <FontAwesomeIcon icon={faReact} /> REACT
        </p>
      );
    default:
      console.log("no type !");
  }
}

export default ProjectDetails;
