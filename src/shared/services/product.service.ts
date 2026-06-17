import { marketPlaceApiClient } from "../api/market-place";
import { PaginatedResponse } from "../interfaces/http/paginated-response";
import { GetProductsRequest } from "../interfaces/http/product";
import { GetProductCommentsInterface } from "../interfaces/http/product-comments";
import { GetProductDetailInterface } from "../interfaces/http/product-detail";
import { ProductCategory, ProductInterface } from "../interfaces/product";
import { ProductCommentInterface } from "../interfaces/product-commets";

//Interface para resposta da API de produtos, extendendo a interface PaginatedResponse com o tipo ProductInterface, que é o dado que será retornado

export const getProducts = async (params: GetProductsRequest) => {
  const {
    data,
  } = await marketPlaceApiClient.post<PaginatedResponse<ProductInterface>>(
    "/products",
    params,
  );
  return data;
};

export const getProductsCategories = async () => {
  const { data } = await marketPlaceApiClient.get<ProductCategory[]>(
    "/products/categories",
  );
  return data;
};

export const getProductDetail = async (id: number) => {
  const { data } = await marketPlaceApiClient.get<GetProductDetailInterface>(
    `/products/${id}`,
  );
  return data;
};

export const getProductComments = async (
  params: GetProductCommentsInterface,
) => {
  const {
    data,
  } = await marketPlaceApiClient.post<
    PaginatedResponse<ProductCommentInterface>
  >("/products/comments", params);
  return data;
};
