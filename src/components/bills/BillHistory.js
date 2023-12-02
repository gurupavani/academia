import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import BillHistoryTable from "./BillHistoryTable";

const BillHistory = ({ open, setOpen, data }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }}>Transaction History</DialogTitle>
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <DialogContent dividers>
        {data && data.length > 0 ? (
          <BillHistoryTable data={data} />
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
              No Data Available
            </span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BillHistory;
