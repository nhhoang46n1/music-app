import axiosClient from "./axiosClient";

const artistApi = {
  getAll(inputValue) {
    const params = {
      q: inputValue,
      type: "artist",
    };
    return axiosClient.get("/search", {
      params,
    });
  },
};

export default artistApi;
