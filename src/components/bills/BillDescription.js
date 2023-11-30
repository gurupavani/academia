import React from "react";

const BillDescription = ({ data }) => {
  return (
    <div className="bill-info-section">
      <div>
        <span>Bill ID :</span>
        <span>{data.id}</span>
      </div>
      <div>
        <span>Description :</span>
        <span>{data.description}</span>
      </div>
      <div>
        <span>Total Amount :</span>
        <span>{data.amount}</span>
      </div>
      <div>
        <span>Paid Amount :</span>
        <span>{data.a_paid}</span>
      </div>
      <div>
        <span>Balance Amount :</span>
        <span>{data.balance}</span>
      </div>
      <div>
        <span>Bill date :</span>
        <span>{data.billDate}</span>
      </div>
      <div>
        <span>Deadline :</span>
        <span>{data.deadline}</span>
      </div>
      <div>
        <span>Status :</span>
        <span className="bill-info-status status-progess">paid</span>
      </div>
    </div>
  );
};

export default BillDescription;
