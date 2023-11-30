import React, { useState } from "react";
import BillsTableSection from "./BillsTableSection";
import BillHistory from "./BillHistory";
import { useNavigate } from "react-router-dom";

const Bills = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handlePayBill = () => {
    // seleected it save in context
    navigate("/payment");
  };

  const handleViewHistory = () => {
    setOpen(true);
  };

  return (
    <div className="bills-container">
      {/* button bills */}
      <div className="bills-btn-section">
        <button className="custom-btn btn-small" disabled={!selected} onClick={handleViewHistory}>View History</button>
        <button className="custom-btn btn-small" disabled={!selected} onClick={handlePayBill}>Pay Bill</button>
      </div>
      {/* bills section */}
      <BillsTableSection selected={selected} setSelected={setSelected}/>
      {/* bill history section */}
      <BillHistory open={open} setOpen={setOpen} />
    </div>
  );
};

export default Bills;
