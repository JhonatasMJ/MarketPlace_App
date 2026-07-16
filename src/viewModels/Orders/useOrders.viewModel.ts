import { useGetOrders } from "../../shared/queries/orders/use-get-orders.query";

export const useOrdersViewModel = () => {
  const { data: ordersResponse, error, isLoading } = useGetOrders();
  const orders = ordersResponse?.orders ?? [];
  return {
    orders,
    error,
    isLoading
  };
};
