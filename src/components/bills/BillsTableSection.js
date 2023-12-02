import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import BillTableItem from "./BillTableItem";

const BillsTableSection = ({
  data,
  selected,
  setSelected,
}) => {
  return (
    <div className="bills-table-section">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="table-head-row">
              <TableCell />
              <TableCell />
              <TableCell className="table-head-cell">Bill Id</TableCell>
              <TableCell className="table-head-cell">Description</TableCell>
              <TableCell className="table-head-cell">Amount</TableCell>
              <TableCell className="table-head-cell">Bill Date</TableCell>
              <TableCell className="table-head-cell">Deadline</TableCell>
              <TableCell className="table-head-cell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((billItem, i) => (
              <BillTableItem
                key={i}
                data={billItem}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BillsTableSection;
