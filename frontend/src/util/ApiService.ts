import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class ApiService {
  config: AxiosRequestConfig = {
    baseURL: "http://localhost:3002",
  };

  client: AxiosInstance = axios.create(this.config);

  constructor() {
    this.client.interceptors.request.use((config: AxiosRequestConfig) =>({
      headers: {
        'test': "testtoken"
      }
    }))
  }
}

export const apiService = new ApiService();