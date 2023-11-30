import { Logout, Person } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const user = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
    navigate("/profile");
  };

  const handleLogout = () => {
    handleClose();
    navigate("/login");
  };
  return (
    <div className="header-container">
      <div className="header-title">Academia</div>
      <div className="header-user-info">
        <div className="header-info">
          <span className="header-info-name">
            {user ? `${user.fname} ${user.lname}` : ""}
          </span>
          <span className="header-info-email">{user ? user.email : ""}</span>
        </div>
        <div>
          <IconButton onClick={handleMenu}>
            <Avatar
              className="header-avatar"
              src={user ? user.photoPath : ""}
              alt={user ? user.fname : ""}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleProfile}>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
