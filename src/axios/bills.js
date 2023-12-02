import axios from "./instance";

export const getBills = async (id) => {
  try {
    const res = await axios.get("/bills", {
      params: { std_id: id },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.data;
  }
};

export const getBillDetails = async (id) => {
  try {
    const res = await axios.get("/bills/bill", {
      params: { billid: id },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.data;
  }
};

export const getBillHistory = async (id) => {
  try {
    const res = await axios.get("/bills/bill/history", {
      params: { billid: id },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.data;
  }
};
