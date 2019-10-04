import axios, { AxiosRequestConfig } from "axios";
import config from "../config";

const INSTANCE = axios.create({
  baseURL: config.BASE_URL
});

INSTANCE.interceptors.request.use((req: AxiosRequestConfig) => {
  let { url } = req;

  if (url)
    req.url = url.concat(`&lang=${config.LANGUAGE}&APPID=${config.API_KEY}`);

  return req;
});

INSTANCE.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response.status === 401) {
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);
export default INSTANCE;
