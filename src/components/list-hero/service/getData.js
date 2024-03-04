import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("https://staging.ina17.com/data.json");
    return response?.data;
  } catch (err) {
    throw err;
  }
};
