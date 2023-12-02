import React, { useState } from "react";
import { useUpdateUser } from "../../context/UserContext";
import { useUpdateLogin } from "../../context/LoginContext";
import { getUserOverView } from "../../axios/student";

export const useUserOverview = () => {
  const updateUser = useUpdateUser();
  const updateLogin = useUpdateLogin();

  const getData = async (id) => {
    const res = await getUserOverView(id);
    if (res) {
      updateUser(res);
      !localStorage.getItem("sid") && localStorage.setItem("sid", res.id);
    } else {
      updateLogin(false);
    }
  };
  return [getData];
};
