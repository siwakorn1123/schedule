import React, { useState } from "react";
import type { FormEvent } from "react";
import "./login.css";

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Add your login API call here
      if (!formData.email || !formData.password) {
        throw new Error("กรุณากรอกข้อมูลให้ครบถ้วน");
      }
      
      // Example API call:
      // const response = await loginUser(formData);
      await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate API call
      console.log("Login attempt with:", formData);
      
      // Redirect after successful login
      window.location.href = "/manage";
    } catch (err) {
      setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {error && <div className="login-error">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label className="login-label">Email</label>
            <input
              type="email"
              name="email"
              className="login-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-field">
            <label className="login-label">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
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
