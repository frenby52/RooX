import axios from "axios";
import {BASE_URL, TIMEOUT} from "./const";

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  return api;
};
