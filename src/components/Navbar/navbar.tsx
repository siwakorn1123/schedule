import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Schedule
            </div>
            <ul className="navbar-menu">
                <li><a href="/" className="navbar-link">หน้าแรก</a></li>
                <li><a href="/about" className="navbar-link">เกี่ยวกับ</a></li>
                <li><a href="/manage" className="navbar-link">สร้าง</a></li>
                <li><a href="/organization" className="navbar-link">องค์กร</a></li>
                <li><a href="/login" className="navbar-link">เข้าสู่ระบบ</a></li>
                <li><a href="/register" className="navbar-link register">สมัครสมาชิก</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;