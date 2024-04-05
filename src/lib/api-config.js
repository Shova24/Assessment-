import axios from "axios";

export const BaseAPI = axios.create({
  baseURL:  import.meta.env.VITE_APP_BaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
