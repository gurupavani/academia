import React from "react";

const BillCheckbox = ({ title, name, value, handleChange }) => {
  return (
    <div className="bill-checkbox">
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={(e) => handleChange(e.target.name, e.target.checked)}
      />
      <span>{title}</span>
    </div>
  );
};

export default BillCheckbox;
