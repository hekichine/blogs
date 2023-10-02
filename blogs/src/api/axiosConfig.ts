import axios, { AxiosInstance } from "axios";
import queryString from "query-string";

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // handle token
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    console.log("check res: ", response);
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
