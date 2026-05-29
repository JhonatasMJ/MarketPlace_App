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

const AUTH_STORAGE_KEY = "marketplace-auth";

const PUBLIC_ROUTES = ["/auth/register", "/auth/login", "/auth/refresh"];

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
        const isPublicRoute = PUBLIC_ROUTES.some((route) =>
          config.url?.includes(route),
        );

        if (isPublicRoute) {
          return config;
        }

        const authData = await AsyncStorage.getItem(AUTH_STORAGE_KEY);

        if (authData) {
          const {
            state: { token },
          } = JSON.parse(authData);

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