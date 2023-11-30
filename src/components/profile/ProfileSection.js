import { Avatar } from "@mui/material";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="profile-section-main">
      <div className="profile-avatar-container">
        <Avatar className="profile-avatar"/>
      </div>
      <div className="profile-info-container">
        <span className="profile-info-heading">Student Details</span>
        <div>
          <span>Full Name :</span>
          <span>J p g</span>
        </div>
        <div>
          <span>Roll No :</span>
          <span>MT2-023118</span>
        </div>
        <div>
          <span>Email : </span>
          <span></span>
        </div>
        <div>
          <span>Graduation Year :</span>
          <span></span>
        </div>
        <div>
          <span>CGPA :</span>
          <span></span>
        </div>
        <div>
          <span>Total Credits :</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
