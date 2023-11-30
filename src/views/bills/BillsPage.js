import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Bills from "../../components/bills/Bills";
import "../../components/bills/bills.css"

const BillsPage = () => {
  return (
    <Navigation>
      <Bills />
    </Navigation>
  );
};

export default BillsPage;
