export interface OrderInterface {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  totalPrice: number;
  createdAt: Date;
  creditCard: {
    id: number;
    maskedNumber: string;
  };
}
