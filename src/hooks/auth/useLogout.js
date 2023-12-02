import React from "react";
import {  logout } from "../../axios/auth";
import { useUpdateLogin } from "../../context/LoginContext";
import { useUser } from "../../context/UserContext";

export const useLogout = () => {
  const updateLogin = useUpdateLogin();
  const user=useUser()

  const logoutUser = async () => {
    const res = await logout(user.id);
    if (res) {
      updateLogin(false);
    }
  };
  return {logoutUser};
};
