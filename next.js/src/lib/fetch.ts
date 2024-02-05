import axios from "axios";

export const apidomain = process.env.API_URL;

const axiosClient = axios.create({
  baseURL: apidomain,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
