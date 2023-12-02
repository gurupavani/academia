import axios from "./instance";

export const getUserOverView = async(id) => {
  try {
    const res = await axios.get("/student/overview", {
      params: { id },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.data;
  }
};

export const getUserProfile= async(id) => {
  try {
    const res = await axios.get("/student/profile", {
      params: { id },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.data;
  }
};

