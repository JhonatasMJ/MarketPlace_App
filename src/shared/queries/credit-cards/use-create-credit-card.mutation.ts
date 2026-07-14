import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCreditCard } from "../../services/credit-card.service";
import { CreateCreditCardRequest } from "../../interfaces/http/create-credit-card";
import { Toast } from "toastify-react-native";

export const useCreateCreditCardMutation = () => {

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (creditCardData: CreateCreditCardRequest) =>
      createCreditCard(creditCardData),
    onSuccess: (response) => {
      Toast.success(response.message ?? "Cartão criado com sucesso");
        //Se tivermos uma query ativa, vamos invalidar ela, para que o tanstack query recarregue os dados, assim atualizando o cache.
      queryClient.invalidateQueries({ queryKey: ["credit-cards"] });
    },
  });

  return mutation;
};
