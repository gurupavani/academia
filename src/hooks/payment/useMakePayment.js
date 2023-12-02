import React from "react";
import { makePayment } from "../../axios/payment";
import { useNavigate } from "react-router-dom";
import { useUpdateBill } from "../../context/BillContext";

export const useMakePayment = () => {
  const navigate = useNavigate();
  const updateBill = useUpdateBill();

  const payBill = async (data) => {
    const res = await makePayment(data);
    if (res) {
      if (res.status) {
        navigate("/bills");
        updateBill(null)
      }
    } else {
    }
  };

  return [payBill];
};
