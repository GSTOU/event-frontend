/* eslint-disable no-restricted-imports */
import axios from 'axios';


declare module 'axios' {
  interface AxiosRequestConfig {
    p0?: number;
  }
}

export const apiClient = axios.create({ baseURL: 'https://event.gstou.ru' });
// export const apiClient = axios.create({ baseURL: 'https://forms-dev.gstou.ru' });


apiClient.interceptors.request.use(
  (config) => {
    config.headers['x-api-key'] = localStorage.getItem('token');
    return config;
  },
  (error) => Promise.reject(error),
);


