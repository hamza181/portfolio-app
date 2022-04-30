import { message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constant";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 422 || res.status === 500 || !data) {
        message.error("Invalid Login");
      } else {
        message.success("Successful Login");
        localStorage.setItem("token", data.data.tokens[0].token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      message.error(error.message);
    }
  };

  return (
    <div className="signup-main ms-auto me-auto mt-5">
      <h2 className="text-center">Login</h2>
      <div className="signup-form">
        <form action="" className="">
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              autoComplete="none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-control"
              autoComplete="none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center mt-3 pb-1">
            <button
              type="submit"
              className="btn btn-primary signup-button"
              onClick={clickLogin}
            >
              Login
            </button>
            <p className="mt-1">
              Don't have an account ?{" "}
              <Link to="/signup">
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
