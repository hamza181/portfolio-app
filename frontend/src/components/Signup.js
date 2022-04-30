import { message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    work: "",
    phone: "",
  });

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const clickSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword, work, phone } = user;

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, cpassword, work, phone }),
    });

    const data = await res.json();

    if (res.status === 422 || res.status === 500 || !data) {
      message.error("Invalid Registration");
      console.log("invalid Registration");
    } else {
      message.success("Successful Registration");
      console.log("Successful Registration");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="signup-main ms-auto me-auto mt-3">
        <h2 className="text-center">Sign up</h2>
        <div className="signup-form">
          <form method="POST" className="">
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInput}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                className="form-control"
                autoComplete="none"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Mobile number</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInput}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Your profession</label>
              <input
                type="text"
                name="work"
                value={user.work}
                onChange={handleInput}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                className="form-control"
                autoComplete="none"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInput}
                className="form-control"
                autoComplete="none"
              />
            </div>
            <div className="text-center mt-3 pb-1">
              <button
                type="submit"
                className="btn btn-primary signup-button"
                onClick={clickSignup}
              >
                Sign up
              </button>
              <p className="mt-1">
                Already have an account ?{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
