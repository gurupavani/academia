import React, { useState } from "react";
import { getlogin } from "../../axios/auth";
import { useNavigate } from "react-router-dom";
import { useUpdateLogin } from "../../context/LoginContext";
import { useUpdateUser } from "../../context/UserContext";

export const useLogin = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const updateLogin = useUpdateLogin();
  const updateUser = useUpdateUser();

  const loginUser = async (username, password) => {
    const res = await getlogin(username, password);
    if (res) {
      if (res.user && res.status) {
        updateLogin(true);
        updateUser(res.data);
        navigate("/bills");
      } else {
        setError(res.msg);
      }
    }
  };
  return [error, loginUser];
};
