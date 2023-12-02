import React, { useEffect, useState } from "react";
import BillsTableSection from "./BillsTableSection";
import BillHistory from "./BillHistory";
import { useNavigate } from "react-router-dom";
import { useUpdateBill } from "../../context/BillContext";
import { useGetBillHistory } from "../../hooks/bills/useGetBillHistory";

const Bills = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const [billHistory, getBillHistory, clearHistoryData] = useGetBillHistory();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const updateBill = useUpdateBill();

  const handlePayBill = () => {
    // seleected it save in context
    updateBill(selected.billId);
    navigate("/payment");
  };

  const handleViewHistory = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      selected && getBillHistory(selected.billId);
    } else {
      clearHistoryData();
    }
  }, [open]);

  return (
    <div className="bills-container">
      {data && data.length > 0 ? (
        <>
          {/* button bills */}
          <div className="bills-btn-section">
            <button
              className="custom-btn btn-small"
              disabled={!selected || (selected && selected.type === 1)}
              onClick={handleViewHistory}
            >
              View History
            </button>
            <button
              className="custom-btn btn-small"
              disabled={
                !selected ||
                (selected && (selected.type === 3 || selected.type === 4))
              }
              onClick={handlePayBill}
            >
              Pay Bill
            </button>
          </div>
          {/* bills section */}
          <BillsTableSection
            data={data}
            selected={selected}
            setSelected={setSelected}
          />
          {/* bill history section */}
          <BillHistory open={open} setOpen={setOpen} data={billHistory} />
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
              color: "#ddd",
              fontWeight: "bold",
            }}
          >
            No Bills Available
          </span>
        </div>
      )}
    </div>
  );
};

export default Bills;
