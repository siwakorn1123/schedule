import "./organization.css";

import { useLocation } from "react-router-dom";
import { useState } from "react";


  export default function Organization() {
    // ...existing code...
    const location = useLocation();
    const orgName = location.state?.orgName || "-";
    const joinCode = location.state?.joinCode || "-";
    const [employeeName, setEmployeeName] = useState("");
    const [employeeRole, setEmployeeRole] = useState("");
    const [employeeType, setEmployeeType] = useState("Part time");
    // dummy employee list
    const [employees, setEmployees] = useState<string[]>([]);

    function handleAddEmployee() {
      if (employeeName.trim()) {
        setEmployees([...employees, employeeName]);
        setEmployeeName("");
        setEmployeeRole("");
        setEmployeeType("Part time");
      }
    }

    // Calendar state
    const thaiMonths = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    const [month, setMonth] = useState(new Date().getMonth()); // 0-11
    const [year, setYear] = useState(new Date().getFullYear() + 543); // พ.ศ.

    function handlePrevMonth() {
      if (month === 0) {
        setMonth(11);
        setYear(y => y - 1);
      } else {
        setMonth(m => m - 1);
      }
    }
    function handleNextMonth() {
      if (month === 11) {
        setMonth(0);
        setYear(y => y + 1);
      } else {
        setMonth(m => m + 1);
      }
    }

    // สร้าง array ตารางปฏิทิน (7xN)
    function getCalendarRows(month: number, year: number) {
      // year: พ.ศ. ต้องแปลงเป็น ค.ศ. ก่อน
      const engYear = year - 543;
      const firstDay = new Date(engYear, month, 1).getDay(); // 0=Sun
      const daysInMonth = new Date(engYear, month + 1, 0).getDate();
      const rows = [];
      let cells = [];
      let day = 1;
      // first row
      for (let i = 0; i < 7; i++) {
        if (i < firstDay) {
          cells.push(null);
        } else {
          cells.push(day++);
        }
      }
      rows.push([...cells]);
      // next rows
      while (day <= daysInMonth) {
        cells = [];
        for (let i = 0; i < 7; i++) {
          if (day <= daysInMonth) {
            cells.push(day++);
          } else {
            cells.push(null);
          }
        }
        rows.push([...cells]);
      }
      return rows;
    }
    const calendarRows = getCalendarRows(month, year);

    return (
      <div className="organization-page figma-layout">
        <div className="org-figma-layout">
          <div className="org-figma-left">
            <div className="org-figma-card org-figma-info">
              <div className="org-figma-title">ข้อมูลองค์กร</div>
              <div className="org-figma-row">ชื่อองค์กร: <b>{orgName}</b></div>
              <div className="org-figma-row">รหัสเข้าร่วม: <span className="org-figma-joincode">{joinCode}</span></div>
            </div>
            <div className="org-figma-card org-figma-addemp">
              <div className="org-figma-title">เพิ่มพนักงานเอง</div>
              <input className="org-figma-input" placeholder="ชื่อ นามสกุล" value={employeeName} onChange={e => setEmployeeName(e.target.value)} />
              <input className="org-figma-input" placeholder="ตำแหน่ง" value={employeeRole} onChange={e => setEmployeeRole(e.target.value)} />
              <select className="org-figma-select" value={employeeType} onChange={e => setEmployeeType(e.target.value)}>
                <option>Part time</option>
                <option>Full time</option>
              </select>
              <button className="org-figma-btn" onClick={handleAddEmployee}>เพิ่มพนักงาน</button>
              <div className="org-figma-emplist-title">รายชื่อพนักงาน <b>({employees.length} คน)</b></div>
              <ul className="org-figma-emplist">
                {employees.length === 0 ? <li className="org-figma-emplist-empty">ยังไม่มีพนักงาน</li> : employees.map((emp, i) => <li key={i}>{emp}</li>)}
              </ul>
            </div>
          </div>
          <div className="org-figma-card org-figma-main">
            <div className="org-figma-title">ตารางทำงานประจำเดือน</div>
            <div className="org-figma-calendar-controls">
              <button className="org-figma-arrow" onClick={handlePrevMonth}>&#8592;</button>
              <span className="org-figma-month">{thaiMonths[month]} {year}</span>
              <button className="org-figma-arrow" onClick={handleNextMonth}>&#8594;</button>
              <select className="org-figma-select">
                <option>เลือกสาขา</option>
              </select>
              <select className="org-figma-select">
                <option>เลือกวันหยุด</option>
                <option>จันทร์</option>
                <option>อังคาร</option>
                <option>พุธ</option>
                <option>พฤหัสบดี</option>
                <option>ศุกร์</option>
                <option>เสาร์</option>
                <option>อาทิตย์</option>
            </select>
            </div>
            <div className="org-figma-calendar">
              <table className="org-calendar-table">
                <thead>
                  <tr>
                    <th>อา.</th>
                    <th>จ.</th>
                    <th>อ.</th>
                    <th>พ.</th>
                    <th>พฤ.</th>
                    <th>ศ.</th>
                    <th>ส.</th>
                  </tr>
                </thead>
                <tbody>
                  {calendarRows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) =>
                        cell ? (
                          <td key={j}>{cell}</td>
                        ) : (
                          <td key={j} className="org-calendar-empty"></td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}
