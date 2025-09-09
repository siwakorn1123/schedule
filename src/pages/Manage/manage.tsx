import "./manage.css";

export default function Manage() {
  return (
    <div className="manage-bg flex">
      <main className="manage-main fade-in">
        <h1 className="manage-title">สร้างตารางงานสำหรับทุกคน</h1>
        <p className="manage-desc">จัดารตารางงานให้เป็นระบบ ง่าย สะดวก</p>
        <div className="manage-actions">
          <button className="manage-btn primary">
            📅 สร้างตารางงาน
          </button>
          <div className="manage-input-group">
            <input className="manage-input" type="text" placeholder="ป้อนรหัสหรือ ลิงก์" />
            <button className="manage-btn secondary">เข้าร่วม</button>
          </div>
        </div>
        <hr className="manage-divider" />
      </main>
    </div>
  );
}
