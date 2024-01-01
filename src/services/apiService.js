import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const url = "http://localhost:8000/";

export const apiCall = async (endpoint, method, data) => {
  axios.defaults.headers = headers;

  return await axios[method](`${url}${endpoint}`, data).then((res) => res);
};
