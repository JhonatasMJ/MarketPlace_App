import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";
import { useUserStore } from "../store/user-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getBaseUrl = () => {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  });
};

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
      },
    );

    /* Intercepta as respostas para lidar com erros de autenticação */
    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (
          error.response?.status === 401 &&
          error.response?.data?.message === "Token expirado" &&
          !this.isRefreshing
        ) {
          this.isRefreshing = true;
          try {
            const userData = await AsyncStorage.getItem(AUTH_STORAGE_KEY);

            if (!userData) {
              throw new Error("Usuário não encontrado");
            }

            const {
              state: { refreshToken },
            } = JSON.parse(userData);

            if (!refreshToken) {
              throw new Error("Refresh token não encontrado");
            }

            const { data: response } = await this.instance.post(
              "/auth/refresh",
              {
                refreshToken,
              },
            );

            const currentUserData = JSON.parse(userData);
            currentUserData.state.token = response.token;
            currentUserData.state.refreshToken = response.refreshToken;
            await AsyncStorage.setItem(
              AUTH_STORAGE_KEY,
              JSON.stringify(currentUserData),
            );

            originalRequest.headers.Authorization = `Bearer ${response.token}`;

            return this.instance(originalRequest);
          } catch (error) {
            this.handleUnauthorized();
            return Promise.reject(
              new Error("Sessão expirada, faça login novamente"),
            );
          } finally {
            this.isRefreshing = false;
          }
        }

        if (error.response && error.response.data) {
          return Promise.reject(new Error(error.response.data.message));
        } else {
          return Promise.reject(new Error("Falha na requisição"));
        }
      },
    );
  }
  /* Deleta o token de autenticação */
  private async handleUnauthorized() {

    const {logout} = useUserStore.getState();
    delete this.instance.defaults.headers.common["Authorization"];
    logout();
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
