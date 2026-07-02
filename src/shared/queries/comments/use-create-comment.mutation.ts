import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCommentRequest } from "../../interfaces/http/create-comment";
import { createComment } from "../../services/product.service";
import { Toast } from "toastify-react-native";

export const useCreateCommentMutation = (productId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: CreateCommentRequest) => createComment(comment),
    // Invalida as queries relacionadas ao comentário do usuário e aos comentários do produto, limitando a busca aos 5 minutos mais recentes
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user-comment", productId] });
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      });

      Toast.success(
        response.message || "Avaliação enviada com sucesso!",
        "top",
      );
    },
    onError: (error) => {
      Toast.error(error.message || "Erro ao enviar avaliação!", "top");
    },
  });

  return mutation;
};
