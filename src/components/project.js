import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faReact } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";

const Project = (props) => {
  const history = useHistory();

  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <div
        onClick={() => {
          history.push({
            pathname: `/projects/${props.project.id}`,
            project: props.project,
          });
        }}
        className="card mb-5 "
        style={{ backgroundColor: "#ECE7E2" }}
      >
        <img
          className="card-img-top"
          src={props.project.image}
          alt="project_img"
        />
        <div className="card-body">
          <h5 className="card-title">{props.project.name}</h5>

          {projectType(props)}
        </div>
      </div>
    </div>
  );
};

function projectType(props) {
  switch (props.project.type) {
    case "android":
      return (
        <p className="card-text text-success fw-bold">
          <FontAwesomeIcon icon={faAndroid} /> ANDROID{" "}
        </p>
      );
    case "react":
      return (
        <p className="card-text text-primary fw-bold">
          <FontAwesomeIcon icon={faReact} /> REACT
        </p>
      );
    default:
      console.log("no type !");
  }
}

export default Project;
