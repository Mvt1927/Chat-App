import axios from "axios";
import { API } from "../../utils";

const AXIOS = axios.create({
  baseURL: API.HOST,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AXIOS;
