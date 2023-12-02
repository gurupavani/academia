import React, { useState } from "react";
import { getBillDetails} from "../../axios/bills";

export const useGetBillDetails = () => {
  const [data, setData] = useState(null);

  const getData = async (id) => {
    const res = await getBillDetails(id);
    if (res) {
      setData(res);
    } else {
      setData(null);
    }
  };

  const clearData = () => setData(null);

  return [data, getData, clearData];
};
