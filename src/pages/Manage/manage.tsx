import "./manage.css";

import OrgModal from "./OrgModal";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Manage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();

  function generateJoinCode(length = 6) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  const handleCreateTable = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleOrgSubmit = (orgName: string) => {
    setModalOpen(false);
    const joinCode = generateJoinCode();
    navigate("/organization", { state: { orgName, joinCode } });
  };

  return (
    <div className="manage-bg flex">
      <main className="manage-main fade-in">
        <h1 className="manage-title">สร้างตารางงานสำหรับทุกคน</h1>
        <p className="manage-desc">จัดารตารางงานให้เป็นระบบ ง่าย สะดวก</p>
        <div className="manage-actions">
          <button className="manage-btn primary" onClick={handleCreateTable}>
            📅 สร้างตารางงาน
          </button>
          <div className="manage-input-group">
            <input className="manage-input" type="text" placeholder="ป้อนรหัสหรือ ลิงก์" />
            <button className="manage-btn secondary">เข้าร่วม</button>
          </div>
        </div>
      </main>
      <OrgModal isOpen={modalOpen} onClose={handleModalClose} onSubmit={handleOrgSubmit} />
    </div>
  );
}
