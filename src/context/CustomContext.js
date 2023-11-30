import React from "react";
import { LoginProvider } from "./LoginContext";
import { UserProvider } from "./UserContext";
import { BillProvider } from "./BillContext";

const CustomContext = ({ children }) => {
  return (
    <LoginProvider>
      <UserProvider>
        <BillProvider>{children}</BillProvider>
      </UserProvider>
    </LoginProvider>
  );
};

export default CustomContext;
