import { marketPlaceApiClient } from "@/shared/api/market-place";
import {
  CreateCommentRequest,
  CreateCommentResponse,
} from "@/shared/interfaces/http/create-comment";
import { PaginatedResponse } from "@/shared/interfaces/http/paginated-response";
import { GetProductsRequest } from "@/shared/interfaces/http/product";
import { GetProductCommentsInterface } from "@/shared/interfaces/http/product-comments";
import { GetProductDetailInterface } from "@/shared/interfaces/http/product-detail";
import {
  UpdateCommentRequest,
  UpdateCommentResponse,
} from "@/shared/interfaces/http/update-comment";
import { ProductCategory, ProductInterface } from "@/shared/interfaces/product";
import { ProductCommentInterface } from "@/shared/interfaces/product-commets";

//Interface para resposta da API de produtos, extendendo a interface PaginatedResponse com o tipo ProductInterface, que é o dado que será retornado

export const getProducts = async (params: GetProductsRequest) => {
  const { data } = await marketPlaceApiClient.post<
    PaginatedResponse<ProductInterface>
  >("/products", params);
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
  const { data } = await marketPlaceApiClient.post<
    PaginatedResponse<ProductCommentInterface>
  >("/products/comments", params);
  return data;
};

export const createComment = async (params: CreateCommentRequest) => {
  const { data } = await marketPlaceApiClient.post<CreateCommentResponse>(
    "/products/create/comments",
    params,
  );
  return data;
};

export const getUserComment = async (productId: number) => {
  const { data } = await marketPlaceApiClient.get<{
    comment: {
      id: number;
      content: string;
      createdAt: Date;
      user: {
        id: number;
        name: string;
      }
    };
    rating:number;
  }>(`/products/${productId}/user-comment`);
  return data;
};

export const updateUserComment = async (
  params: UpdateCommentRequest,
) => {
  const { data } = await marketPlaceApiClient.put<UpdateCommentResponse>(
    `/products/comments/${params.commentId}`,
    { content: params.content, rating: params.rating },
  );
  return data;
};
