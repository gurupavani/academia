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
        headers: {
          contentType: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout=async(id)=>{
  try {
    const res = await axios.post(
      "/auth/logout",
      {id},
      {
        headers: {
          contentType: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    return error.data
  }
}
