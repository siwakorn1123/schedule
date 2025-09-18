import React from "react";
import "./OrgModal.css";

interface OrgModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (orgName: string) => void;
}

export default function OrgModal({ isOpen, onClose, onSubmit }: OrgModalProps) {
  const [orgName, setOrgName] = React.useState("");

  if (!isOpen) return null;

  return (
    <div className="org-modal-backdrop">
      <div className="org-modal">
        <h2>สร้างองค์กรใหม่</h2>
        <input
          type="text"
          placeholder="ชื่อองค์กร"
          value={orgName}
          onChange={e => setOrgName(e.target.value)}
          className="org-modal-input"
        />
        <div className="org-modal-actions">
          <button onClick={onClose} className="org-modal-btn">ยกเลิก</button>
          <button
            onClick={() => {
              onSubmit(orgName);
              setOrgName("");
            }}
            className="org-modal-btn primary"
            disabled={!orgName.trim()}
          >สร้าง</button>
        </div>
      </div>
    </div>
  );
}
