import React from "react";
import Navigation from "../../components/navigation/Navigation";
import BillPayment from "../../components/payment/BillPayment";
import "../../components/payment/payment.css"

const PaymentPage = () => {
  return (
    <Navigation>
      <BillPayment />
    </Navigation>
  );
};

export default PaymentPage;
