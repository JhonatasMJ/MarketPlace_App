import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { submitOrder } from "../../services/orders.service";

export const useSubmitOrderMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (response) => {
      Toast.success(response.message ?? "Pedido realizado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      Toast.error(error.message ?? "Erro ao realizar pedido");
    },
  });

  return mutation;
};
