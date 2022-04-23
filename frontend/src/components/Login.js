import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="text-center mt-3 pb-1">
          <button type="submit" className="btn btn-primary signup-button">
            Login
          </button>
          <p className="mt-1">
            Don't have an account ? {" "} <Link to="/signup"><span>Sign up</span></Link>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login