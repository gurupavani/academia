import React from "react";
import Navigation from "../../components/navigation/Navigation";
import StudentProfile from "../../components/profile/StudentProfile";
import "../../components/profile/profile.css";

const ProfilePage = () => {
  return (
    <Navigation>
      <StudentProfile />
    </Navigation>
  );
};

export default ProfilePage;
