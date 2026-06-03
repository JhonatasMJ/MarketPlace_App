import { marketPlaceApiClient } from "../api/market-place";
import { ProductResponse } from "../interfaces/http/product-response";

interface GetProductsRequest {
  pagination: {
    page: number;
    perPage: number;
  };
  filters: {
    from: Date;
    to: Date;
    categoryId: number;
    searchText: string;
    minValue: number;
    maxValue: number;
  };
  sort: {
    averageRating: string;
  };
}

export const getProducts = async (params: GetProductsRequest) => {
  const { data } = await marketPlaceApiClient.get<ProductResponse>(
    "/products",
    { params },
  );
  return data;
};
