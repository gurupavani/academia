import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BillHistoryTableItem from "./BillHistoryTableItem";

const BillHistoryTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="table-head-row">
            <TableCell className="table-head-cell">Payment Id</TableCell>
            <TableCell className="table-head-cell">Description</TableCell>
            <TableCell className="table-head-cell">Amount</TableCell>
            <TableCell className="table-head-cell">Payment Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((billItem, i) => (
            <BillHistoryTableItem
              key={i}
              data={billItem}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillHistoryTable;
