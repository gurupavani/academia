import React from "react";
import { useBill, useUpdateBill } from "../../context/BillContext";

const BillSelection = ({ data }) => {
  const bill = useBill();
  const updateBill = useUpdateBill();

  const handleSelect = (e) => {
    const value = e.target.value;
    updateBill(value);
  };

  return (
    <div className="bill-select-container">
      <span>Select Bill for Payment :</span>
      <div className="bill-select-section">
        <select className="bill-select" value={bill} onChange={handleSelect}>
          <option value={null}>select option</option>
          {data &&
            data.length > 0 &&
            data.map((item, i) => (
              <option value={item.billId}>{item.description}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default BillSelection;
