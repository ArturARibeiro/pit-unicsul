import axios from "axios";
import {getCookie} from "@common/domain/utils/cookie.ts";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  withCredentials: true,
  headers: {
    "X-XSRF-TOKEN": getCookie('XSRF-TOKEN'),
  }
})

export default {
  logout: (): Promise<void> => {
    return new Promise((resolve, reject) => {
      const request = api.post('/logout');

      request.then(() => {
        resolve();
      })

      request.catch(error => {
        reject(error);
      });
    })
  }
}