import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";

import {getCookie} from "@common/domain/utils/cookie.ts";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  withCredentials: true,
  headers: {
    "X-XSRF-TOKEN": getCookie('XSRF-TOKEN'),
  }
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError|null> => {
  switch (error.status) {
    default:
      return Promise.reject(error);
  }
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError|null> => {
  switch (error.status) {
    case 401:
      return Promise.resolve(null);
    default:
      return Promise.reject(error);
  }
}

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

export default instance;


