import React, { useEffect, useState } from "react";
import { getBills } from "../../axios/bills";
import { useUser } from "../../context/UserContext";
import { useUpdateLogin } from "../../context/LoginContext";

export const useGetBills = () => {
  const [data, setData] = useState([]);
  const user = useUser();
  const updateLogin=useUpdateLogin()

  const getData = async () => {
    const res = await getBills(user.id);
    if (res) {
      setData(res);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  return [data];
};
