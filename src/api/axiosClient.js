import axios from "axios";

const token = localStorage.getItem("token");
const axiosClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
  "Content-Type": "application/json",
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default axiosClient;
