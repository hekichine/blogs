import axiosClient from "./axiosConfig";

const SlideApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSlide: (params: any) => {
    const url = "/";
    return axiosClient.get(url, { params });
  },
};
export default SlideApi;
