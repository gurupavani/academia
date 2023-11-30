import React from "react";
import BillSelection from "./BillSelection";
import BillInfo from "./BillInfo";

const BillPayment = () => {
  return (
    <div className="bill-payment-main">
      <BillSelection />
      <BillInfo data={{}}/>
    </div>
  );
};

export default BillPayment;
