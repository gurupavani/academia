import React from "react";

const AmountBox = ({ value, handleChange, err }) => {
  return (
    <div className="payment-amount-section">
      <input type="number" value={value} onChange={e=>handleChange(e.target.value)} />
      {err && err.length > 0 && <span>{err}</span>}
    </div>
  );
};

export default AmountBox;
