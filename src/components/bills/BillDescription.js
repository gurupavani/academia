import React from "react";
import moment from "moment";

const BillDescription = ({ data }) => {
  const formatAmount = (num) =>
    num !== null
      ? `₹ ${num
          .toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
      : "-";
  return (
    <div className="bill-info-section">
      <div>
        <span>Bill ID :</span>
        <span>{data.billId}</span>
      </div>
      <div>
        <span>Description :</span>
        <span>{data.description}</span>
      </div>
      <div>
        <span>Total Amount :</span>
        <span>{formatAmount(data.amount)}</span>
      </div>
      <div>
        <span>Paid Amount :</span>
        <span>{formatAmount(data.paidAmount)}</span>
      </div>
      <div>
        <span>Balance Amount :</span>
        <span>{formatAmount(data.balance)}</span>
      </div>
      <div>
        <span>Bill date :</span>
        <span>{moment(data.billDate).format("DD-MM-YYYY")}</span>
      </div>
      <div>
        <span>Deadline :</span>
        <span>{moment(data.deadline).format("DD-MM-YYYY")}</span>
      </div>
      <div>
        <span>Status :</span>
        <span
          className={`bill-info-status ${
            data.type === 1
              ? "status-unpaid"
              : data.type === 2
              ? "status-progess"
              : data.type === 3
              ? "status-paid"
              : ""
          }`}
        >
          {data.type === 1
            ? "NOT PAID"
            : data.type === 2
            ? "PARTIALLY PAID"
            : data.type === 3
            ? "PAID"
            : "-"}
        </span>
      </div>
    </div>
  );
};

export default BillDescription;
