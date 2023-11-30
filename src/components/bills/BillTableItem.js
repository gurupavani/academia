import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import BillDescription from "./BillDescription";

const BillTableItem = ({ data, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const selectTableItem = (id, value) => {
    // console.log(id, value);
    value ? setSelected(id) : setSelected(null);
  };
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={data.id === selected}
            onChange={(e) => selectTableItem(data.id, e.target.checked)}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        <TableCell>
          <Tooltip title="View Bill Details">
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell component="th" scope="row">
          {data.id}
        </TableCell>
        <TableCell>{data.description}</TableCell>
        <TableCell>{data.amount}</TableCell>
        <TableCell>{data.billDate}</TableCell>
        <TableCell>{data.deadline}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {/* description */}
            <BillDescription data={data} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BillTableItem;
