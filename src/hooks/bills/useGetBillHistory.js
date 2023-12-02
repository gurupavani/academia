import React, { useState } from "react";
import { getBillHistory } from "../../axios/bills";

export const useGetBillHistory = () => {
  const [data, setData] = useState([]);

  const getData = async (id) => {
    const res = await getBillHistory(id);
    if (res && res.status) {
      setData(res.data);
    } else {
      setData([]);
    }
  };

  const clearData = () => setData([]);
  return [data, getData, clearData];
};
