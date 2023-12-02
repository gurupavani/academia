import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Checkbox,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BillDescription from "./BillDescription";
import { useGetBillDetails } from "../../hooks/bills/useGetBillDetails";
import moment from "moment";

const BillTableItem = ({ data, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const [billDetails, getBillData, clearBillData] = useGetBillDetails();

  const selectTableItem = (item, value) => {
    // console.log(id, value);
    value ? setSelected(item) : setSelected(null);
  };
  useEffect(() => {
    if (open) {
      getBillData(data.billId);
    } else {
      clearBillData();
    }
  }, [open]);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={data.billId === selected?.billId}
            onChange={(e) => selectTableItem(data, e.target.checked)}
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
          {data.billId}
        </TableCell>
        <TableCell>{data.description}</TableCell>
        <TableCell>
          ₹{" "}
          {data.amount
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </TableCell>
        <TableCell>{moment(data.billDate).format("DD-MM-YYYY")}</TableCell>
        <TableCell>{moment(data.deadline).format("DD-MM-YYYY")}</TableCell>
        <TableCell>
          <span
            className={`bill-info-status ${
              data.type === 1
                ? "status-unpaid"
                : data.type === 2
                ? "status-progess"
                : data.type === 3
                ? "status-paid"
                : ""
            }`}
          >
            {data.type === 1
              ? "NOT PAID"
              : data.type === 2
              ? "PARTIALLY PAID"
              : data.type===3?"PAID":"-"}
          </span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {/* description */}
            {open && billDetails ? (
              <BillDescription data={billDetails} />
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
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default BillTableItem;
