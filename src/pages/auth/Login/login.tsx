
import React from "react";
import "./login.css";

const Login: React.FC = () => {
  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="login-field">
            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="login-field">
            <label className="login-label">Password</label>
            <input
              type="password"
              className="login-input"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>
        </form>
        <p className="login-register-text">
          ยังไม่มีบัญชี?{' '}
          <a href="/auth/register" className="login-register-link">
            สมัครสมาชิก
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
