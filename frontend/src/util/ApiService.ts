import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class ApiService {
  config: AxiosRequestConfig = {
    baseURL: "http://localhost:3002",
  };

  client: AxiosInstance;

  constructor() {
    this.client = axios.create(this.config);
    this.client.interceptors.request.use((config: AxiosRequestConfig) => ({
      ...config,
      ...{
        headers: {
          test: "testtoken",
        },
      },
    }));
  }
}

const apiService = new ApiService();

export default apiService;
