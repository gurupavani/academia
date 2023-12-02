import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./navigation.css";
import { useUserOverview } from "../../hooks/user/useUserOverview";
import { useUser } from "../../context/UserContext";
import { useUpdateLogin } from "../../context/LoginContext";

const Navigation = ({ children }) => {
  const [getData] = useUserOverview();
  const user = useUser();
  const updateLogin = useUpdateLogin();

  useEffect(() => {
    if (
      !user &&
      localStorage.getItem("login") === "true" &&
      localStorage.getItem("sid")
    ) {
      // get student overview
      getData(Number(localStorage.getItem("sid")));
    }
  }, [localStorage.getItem("login"),localStorage.getItem("sid")]);
  return (
    <div className="nav-container">
      <Header />
      <div className="body-container">
        <Sidebar />
        <div className="main-container">
          <div className="main-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
