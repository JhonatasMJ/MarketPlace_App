import { marketPlaceApiClient } from "../api/market-place";
import { GetProductsRequest } from "../interfaces/http/product";
import { ProductResponse } from "../interfaces/http/product-response";



export const getProducts = async (params: GetProductsRequest) => {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    "/products",
    { params },
  );
  return data;
};
