import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();
const LoginUpdateContext = createContext();

export const useLogin = () => useContext(LoginContext);
export const useUpdateLogin = () => useContext(LoginUpdateContext);

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const updateLogin = (temp) => setLogin(temp);
  return (
    <LoginContext.Provider value={login}>
      <LoginUpdateContext.Provider value={updateLogin}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
};
