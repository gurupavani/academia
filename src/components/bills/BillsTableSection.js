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
  data = [1, 2, 3, 4, 5],
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((billItem, i) => (
              <BillTableItem
                key={i}
                data={{
                  id: billItem,
                  description: "abcd efgj khgsj",
                  amount: 1234,
                  billDate: "23/03/23",
                  deadline: "02/05/24",
                }}
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
