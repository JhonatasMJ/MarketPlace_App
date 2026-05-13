import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseUrl = () => { 
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  })
}

const baseURL = getBaseUrl();

/* Essa classe é responsável por criar uma instância do axios e fornecer um método para obter a instância */
export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
  }

  getInstance() {
    return this.instance;
  }
}

/* Essa constante é responsável por criar uma instância do axios e fornecer um método para obter a instância */
export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();