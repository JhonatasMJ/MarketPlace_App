import { addFavorite } from "@/shared/services/favorites.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";

export const useAddFavoriteMutation = () => {

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      Toast.success("Produto adicionado aos favoritos!", "bottom");
    },
    onError: (error) => {
      Toast.error(error.message || "Falha ao adicionar produto nos favoritos", "bottom");
    },
  });

  return mutation;
};
