import React from "react";
import ProfileSection from "./ProfileSection";
import { useGetProfile } from "../../hooks/profile/useGetProfile";

const StudentProfile = () => {
  const [data] = useGetProfile();
  return (
    <div className="profile-container">
      <ProfileSection data={data} />
    </div>
  );
};

export default StudentProfile;
