import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="page mx-2">
      <div className="container container-home mt-2 border shadow-sm">
        <div className="p-5 text-secondary d-flex justify-content-center">
          <h1 className="display-3 fw-bold">My Portfolio</h1>
        </div>
      </div>
      <div
        className="container container-home mt-4 border shadow-sm"
        style={{ marginBottom: "300px" }}
      >
        <div className="p-5  text-dark">
          <h1 className="display-5">
            Hi, I'm Zouiti Moussa a Web / Mobile apps developer
          </h1>

          <Link to="/about" className="btn btn-dark mt-3">
            About me
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
