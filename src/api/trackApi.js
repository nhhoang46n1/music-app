import axiosClient from "./axiosClient";

const trackApi = {
  getTopTrack(artistApi) {
    return axiosClient.get(`/artists/${artistApi}/top-tracks?market=VN`);
  },
};
export default trackApi;
