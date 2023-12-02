import React, { useEffect, useState } from "react";
import BillSelection from "./BillSelection";
import BillInfo from "./BillInfo";
import { useBill } from "../../context/BillContext";
import { useGetBills } from "../../hooks/bills/useGetBills";
import { useGetBillDetails } from "../../hooks/bills/useGetBillDetails";

const BillPayment = () => {
  const bill=useBill();
  const [bills]=useGetBills();
  const [billDetails, getBillData, clearBillData] = useGetBillDetails();

  useEffect(()=>{
    if(bill && bills){
      getBillData(bill)
    }else{
      clearBillData()
    }
  },[bills,bill])
  return (
    <div className="bill-payment-main">
      <BillSelection data={bills}/>
      <BillInfo data={billDetails}/>
    </div>
  );
};

export default BillPayment;
