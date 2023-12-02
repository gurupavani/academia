import React, { useState } from "react";
import BillCheckbox from "./BillCheckbox";
import AmountBox from "./AmountBox";
import moment from "moment";
import { useMakePayment } from "../../hooks/payment/useMakePayment";

const BillInfo = ({ data }) => {
  const [pType, setPType] = useState(0);
  const [pAmount, setPAmount] = useState(0);
  const [err, setErr] = useState("");
  const [description, setDescription] = useState("");
  const [payBill] = useMakePayment();

  const formatAmount = (num) =>
    num !== null
      ? `₹ ${num
          .toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
      : "-";

  const handleChange = (name, value) => {
    const keys = name.split("$");

    if (value) {
      setPType(+keys[1]);
      if (+keys[1] === 1) {
        setPAmount(data.balance);
      } else {
        setPAmount(0);
      }
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
      const reqData = {
        billId: data.billId,
        studentId: Number(localStorage.getItem("sid")),
        amount: pAmount,
        description: description,
      };
      payBill(reqData);
    } else {
      // errors showed
    }
  };
  return (
    <div className="bill-payment-container">
      {data ? (
        <>
          <div className="payment-info-container">
            <span>Bill Details :</span>
            <div className="payment-info-section">
              {/* bill details */}

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
          </div>
          {data.type !== 3 && (
            <>
              {" "}
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
                  <AmountBox
                    value={pAmount}
                    handleChange={handleAmount}
                    err={err}
                  />
                )}
                <div className="payment-amount-section">
                  <input
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Description"
                  />
                </div>
              </div>
              {pType > 0 && (
                <div className="payment-final-amount-section">
                  <span>Amount Paid :</span>
                  <span>{pAmount}</span>
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
            </>
          )}
        </>
      ) : (
        <div
          style={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#ddd",
            }}
          >
            No Bill is Selected
          </span>
        </div>
      )}
    </div>
  );
};

export default BillInfo;
