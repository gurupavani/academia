import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import BillHistoryTable from "./BillHistoryTable";

const BillHistory = ({ open, setOpen }) => {
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
        <BillHistoryTable />
      </DialogContent>
    </Dialog>
  );
};

export default BillHistory;
