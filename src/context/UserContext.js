import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserUpdateContext = createContext();

export const useUser = () => useContext(UserContext);
export const useUpdateUser = () => useContext(UserUpdateContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (temp) => setUser(temp);

  useEffect(()=>{
    if(localStorage.getItem("login")==="true" && localStorage.getItem("sid")){
        // get student overview
    }
  },[])
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={updateUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
