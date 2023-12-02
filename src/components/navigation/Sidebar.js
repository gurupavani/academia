import { Logout } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { bottomNavList, mainNavList } from "./navList";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/auth/useLogout";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logoutUser } = useLogout();
  const handleNavList = (path) => {
    navigate(path);
  };

  const handleLogout = () => logoutUser();
  const isActive = (path) => window.location.pathname === path;
  return (
    <div className="nav-sidebar">
      <div className="nav-sidebar-main">
        <List component="nav">
          {mainNavList.map((item, i) => (
            <ListItemButton
              key={i}
              className={`nav-item${
                isActive(item.path) ? " nav-item-selected" : ""
              }`}
              onClick={() => handleNavList(item.path)}
            >
              <ListItemIcon>
                <item.icon className="nav-list-icon" />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </div>
      {/* <Grow /> */}
      <div className="nav-sidebar-bottom">
        <div>
          <button className="nav-custom-btn" onClick={handleLogout}>
            <Logout fontSize="small" />
            Logout
          </button>
        </div>
        {bottomNavList.map((item, i) => (
          <ListItemButton
            key={i}
            className={`nav-item${
              isActive(item.path) ? " nav-item-selected" : ""
            }`}
            onClick={() => handleNavList(item.path)}
          >
            <ListItemIcon>
              <item.icon className="nav-list-icon" />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
