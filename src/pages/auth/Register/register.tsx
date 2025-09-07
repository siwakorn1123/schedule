import React from "react";
import "./register.css";

const Register: React.FC = () => {
  return (
    <div className="register-bg">
      <div className="register-container">
        <h2 className="register-title">Register</h2>
        <form className="register-form">
          <div className="register-field">
            <label className="register-label">Username</label>
            <input
              type="text"
              className="register-input"
              placeholder="Enter your username"
            />
          </div>
          <div className="register-field">
            <label className="register-label">Email</label>
            <input
              type="email"
              className="register-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="register-field">
            <label className="register-label">Password</label>
            <input
              type="password"
              className="register-input"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="register-btn"
          >
            Register
          </button>
        </form>
        <p className="register-login-text">
          Already have an account?{" "}
          <a href="/auth/login" className="register-login-link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;