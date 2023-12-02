import axios from "./instance";

export const makePayment = async (data) => {
  try {
    const res = await axios.post("/bills/bill/pay", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.data;
  }
};
