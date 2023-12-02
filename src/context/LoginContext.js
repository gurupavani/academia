import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();
const LoginUpdateContext = createContext();

export const useLogin = () => useContext(LoginContext);
export const useUpdateLogin = () => useContext(LoginUpdateContext);

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const updateLogin = (temp) => {
    setLogin(temp);
    temp
      ? localStorage.setItem("login", "true")
      : localStorage.clear();

    if (!temp) {
      navigate("/login");
    }
  };
  return (
    <LoginContext.Provider value={login}>
      <LoginUpdateContext.Provider value={updateLogin}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
};
