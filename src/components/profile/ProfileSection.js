import { Avatar } from "@mui/material";
import React from "react";

const ProfileSection = ({ data }) => {
  return (
    <div className="profile-section-main">
      <div className="profile-avatar-container">
        <Avatar className="profile-avatar" src={data ? data.photoPath : null} />
      </div>
      <div className="profile-info-container">
        <span className="profile-info-heading">Student Details</span>
        <div>
          <span>Full Name :</span>
          <span>{data ? `${data.fname} ${data.lname}` : ""}</span>
        </div>
        <div>
          <span>Roll No :</span>
          <span>{data ? data.rollno : ""}</span>
        </div>
        <div>
          <span>Email : </span>
          <span>{data ? data.email : ""}</span>
        </div>
        <div>
          <span>Graduation Year :</span>
          <span>{data ? data.gradYear : ""}</span>
        </div>
        <div>
          <span>CGPA :</span>
          <span>{data ? data.cgpa : ""}</span>
        </div>
        <div>
          <span>Total Credits :</span>
          <span>{data ? data.totalCredits : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
