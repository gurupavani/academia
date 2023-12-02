import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Bills from "../../components/bills/Bills";
import "../../components/bills/bills.css";
import { useGetBills } from "../../hooks/bills/useGetBills";

const BillsPage = () => {
  const [data] = useGetBills();

  return (
    <Navigation>
      <Bills data={data} />
    </Navigation>
  );
};

export default BillsPage;
