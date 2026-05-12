import axios, { AxiosInstance } from "axios";

/* Essa classe é responsável por criar uma instância do axios e fornecer um método para obter a instância */
export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL: "",
    });
  }

  getInstance() {
    return this.instance;
  }
}

/* Essa constante é responsável por criar uma instância do axios e fornecer um método para obter a instância */
export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();