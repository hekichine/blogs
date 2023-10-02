import axiosClient from "./axiosConfig";

const topicsApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getTopics: (params: any) => {
    const url = "";
    return axiosClient.get(url, { params });
  },
};
export default topicsApi;
