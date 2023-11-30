import axios from "./instance";

export const getlogin = async (username, password) => {
  try {
    const res = await axios.post(
      "/auth/login",
      {
        username,
        password,
      },
      {
        Headers: {
          contentType: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
