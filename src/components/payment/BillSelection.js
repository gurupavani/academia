import React from "react";

const BillSelection = () => {
  return (
    <div className="bill-select-container">
      <span>Select Bill for Payment :</span>
      <div className="bill-select-section">
        <select className="bill-select">
          <option>selct option</option>
          <option>option 1</option>
          <option>option 2</option>
        </select>
      </div>
    </div>
  );
};

export default BillSelection;
