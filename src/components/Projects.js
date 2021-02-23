import React from "react";
import Project from "./project";
import { useSelector } from "react-redux";
import Footer from "./footer";

const Projects = () => {
  const projects = useSelector((state) => state.projects);
  return (
    <div className="page">
      <div className="container mt-2 mb-5">
        <div className="row" style={{ marginBottom: "400px" }}>
          {projects.map((project) => {
            return <Project key={"Project " + project.id} project={project} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
