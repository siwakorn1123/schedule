
import React from "react";
import "./home.css";

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <h1 className="hero-title">Schedule</h1>
    <p className="hero-desc">
      ระบบจัดการตารางงานสำหรับ ใช้งานง่าย สะดวก และรวดเร็ว
    </p>
    <a href="/register" className="hero-btn">
      เริ่มต้นใช้งาน
    </a>
  </section>
);

const Home: React.FC = () => (
  <main>
    <HeroSection />
  </main>
);

export default Home;
