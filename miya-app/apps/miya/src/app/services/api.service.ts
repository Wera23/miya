import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:7000/retrievers',
});

export const apiService = axiosInstance;
