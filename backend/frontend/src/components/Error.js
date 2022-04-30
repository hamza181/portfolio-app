import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center home-main">
        <div>
          <h1>404 Error</h1>
          <h1>This page not exist</h1>
          <Link to={"/"}>
            <button className="btn btn-primary">Go To Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
