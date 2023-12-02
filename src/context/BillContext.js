import React, { createContext, useContext, useState } from "react";

const BillContext = createContext();
const BillUpdateContext = createContext();

export const useBill = () => useContext(BillContext);
export const useUpdateBill = () => useContext(BillUpdateContext);

export const BillProvider = ({ children }) => {
  const [bill, setBill] = useState(
    localStorage.getItem("bid") ? localStorage.getItem("bid") : null
  );

  const updateBill = (temp) => {
    setBill(temp);
    if (temp) {
      localStorage.setItem("bid", temp);
    } else {
      localStorage.removeItem("bid");
    }
  };
  return (
    <BillContext.Provider value={bill}>
      <BillUpdateContext.Provider value={updateBill}>
        {children}
      </BillUpdateContext.Provider>
    </BillContext.Provider>
  );
};
