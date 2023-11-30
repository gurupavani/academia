import React from "react";
import { TableCell, TableRow } from "@mui/material";

const BillHistoryTableItem = ({ data }) => {
  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell component="th" scope="row">
        {data.id}
      </TableCell>
      <TableCell>{data.description}</TableCell>
      <TableCell>{data.amount}</TableCell>
      <TableCell>{data.paymentDate}</TableCell>
    </TableRow>
  );
};

export default BillHistoryTableItem;
