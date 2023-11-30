import React, { useState } from "react";
import BillCheckbox from "./BillCheckbox";
import AmountBox from "./AmountBox";

const BillInfo = ({ data }) => {
  const [pType, setPType] = useState(0);
  const [pAmount, setPAmount] = useState(0);
  const [err, setErr] = useState("");

  const handleChange = (name, value) => {
    const keys = name.split("$");

    if (value) {
      setPType(+keys[1]);
    } else {
      setPType(null);
    }
    setErr("");
  };

  const handleAmount = (value) => {
    setPAmount(value);
    validate(value);
  };

  const validate = (value) => {
    let valid = true;
    if (pType !== 2) return valid;

    if (value <= 0) {
      setErr("Please Enter valid Amount");
      valid = false;
    } else if (value > data.balance) {
      setErr("Amount entered is greater than amount to be paid");
      valid = false;
    } else setErr("");

    return valid;
  };

  const submitPayment = (e) => {
    const valid = validate(pAmount);
    if (valid) {
      // continue payment
      console.log("payment successful");
    } else {
      // errors showed
    }
  };
  return (
    <div className="bill-payment-container">
      <div className="payment-info-container">
        <span>Bill Details :</span>
        <div className="payment-info-section">
          {/* bill details */}

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
        </div>
      </div>
      <div className="payment-selection-section">
        {/* payment selection */}
        <span>Select A Type of Payment</span>
        <BillCheckbox
          title={"Pay amount in single installment"}
          name={"ptype$1"}
          value={pType === 1}
          handleChange={handleChange}
        />

        <BillCheckbox
          title={"Pay partial amount of the bill"}
          name={"ptype$2"}
          value={pType === 2}
          handleChange={handleChange}
        />
        {pType === 2 && (
          <AmountBox value={pAmount} handleChange={handleAmount} err={err} />
        )}
      </div>
      {pType>0 && (
        <div className="payment-final-amount-section">
          <span>Amount Paid :</span>
          <span>{pType === 2 ? pAmount : "123"}</span>
        </div>
      )}
      <div className="payment-action-section">
        {/* payment button */}
        <button
          className="custom-btn btn-small"
          disabled={!pType}
          onClick={submitPayment}
        >
          Pay now
        </button>
      </div>
    </div>
  );
};

export default BillInfo;
