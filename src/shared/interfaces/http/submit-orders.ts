export interface OrdersRequestParams {
  creditCardId: number;
  items: {
    productId: number;
    quantity: number;
  }[];
}

export interface SubmitOrderResponse {
  message: string;
  orderCounts: 0;
  orders:
  {
    id: number;
    productId: number;
    quantity: number;
    totalPrice: number;
  }[];
}
