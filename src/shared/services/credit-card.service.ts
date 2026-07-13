import { marketPlaceApiClient } from "../api/market-place";
import { GetCreditCard } from "../interfaces/credit-card";
import {
  CreateCreditCardRequest,
  CreateCreditCardResponse,
} from "../interfaces/http/create-credit-card";

//Services - é onde fazemos as requisições para o backend, e configuro os endpoints.

//Queries - é onde configuramos as queries para o tanstack query, e usamos os services.

//Mutations - é onde configuramos as mutations para o tanstack query, concentram toda a lógica de escrita, invalidação e atualização do cache..

export const getCreditCard = async () => {
  const { data } =
    await marketPlaceApiClient.get<GetCreditCard[]>("/credit-card");

  return data;
};

export const createCreditCard = async (creditCardData: CreateCreditCardRequest) => {
  const { data } = await marketPlaceApiClient.post<CreateCreditCardResponse>(
    "/credit-cards",
    creditCardData,
  );

  return data;
};
