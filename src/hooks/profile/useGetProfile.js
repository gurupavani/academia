import React, { useEffect, useState } from "react";
import { getBillDetails } from "../../axios/bills";
import { useUser } from "../../context/UserContext";
import { getUserProfile } from "../../axios/student";

export const useGetProfile = () => {
  const [data, setData] = useState(null);
  const user = useUser();

  const getData = async () => {
    const res = await getUserProfile(user.id);
    if (res) {
      setData(res);
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    user && getData();
  }, [user]);

  return [data];
};
