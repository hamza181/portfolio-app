import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="signup-main ms-auto me-auto mt-3">
        <h2 className="text-center">Sign up</h2>
        <div className="signup-form">
          <form action="" className="">
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="form-control"
                autoComplete="none"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Mobile number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Your profession</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="text-center mt-3 pb-1">
              <button type="submit" className="btn btn-primary signup-button">
                Sign up
              </button>
              <p className="mt-1">
                Already have an account ? {" "} <Link to="/login"><span>Login</span></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
