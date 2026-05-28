import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";
import { useUserStore } from "../store/user-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getBaseUrl = () => { 
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  })
}

export const baseURL = getBaseUrl();

/* Essa classe é responsável por criar uma instância do axios e fornecer um método para obter a instância */
export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }
  
  
  /* Intercepta as requisições para adicionar o token de autenticação */
  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem("userData");
  
        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData);
  
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
  
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}


export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();