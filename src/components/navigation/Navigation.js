import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./navigation.css";

const Navigation = ({ children }) => {
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
