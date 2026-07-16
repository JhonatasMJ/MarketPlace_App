import { useGetOrders } from "../../shared/queries/orders/use-get-orders.query";

export const useOrdersViewModel = () => {
  const { data: ordersResponse } = useGetOrders();
  const orders = ordersResponse?.orders ?? [];
  return {
    orders,
  };
};
