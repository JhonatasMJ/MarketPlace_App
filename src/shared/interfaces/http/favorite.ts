export interface Favorite {
  id: number;
  productId: number;
  product: string;
  createdAt: string;
}

export interface HandleFavoriteResponse {
  id: number;
  productId: number;
  userId: number;
  createdAt: string;
}
