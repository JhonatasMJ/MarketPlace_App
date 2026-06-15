import { marketPlaceApiClient } from "../api/market-place";
import { GetProductsRequest } from "../interfaces/http/product";
import { GetProductDetailInterface } from "../interfaces/http/product-detail";
import { ProductResponse } from "../interfaces/http/product-response";
import { ProductCategory} from "../interfaces/product";


export const getProducts = async (params: GetProductsRequest) => {
  const { data } = await marketPlaceApiClient.post<ProductResponse>(
    "/products",
    params,
  );
  return data;
};


export const getProductsCategories = async () => {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>("/products/categories");
  return data;
};

export const getProductDetail = async (id: number) => {
  const { data } = await marketPlaceApiClient.get<GetProductDetailInterface>(`/products/${id}`);
  return data;
};