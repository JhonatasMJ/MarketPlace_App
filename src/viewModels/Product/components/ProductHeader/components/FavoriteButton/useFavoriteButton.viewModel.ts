import { useAddFavoriteMutation } from "@/shared/queries/favorites/use-add-favorite.mutation";
import { useGetFavorites } from "@/shared/queries/favorites/use-get-favorites.query";
import { useRemoveFavoriteMutation } from "@/shared/queries/favorites/use-remover-favorite.mutation";
import { useMemo } from "react";

export const useFavoriteButtonViewModel = (productId: number) => {
  const { data: favorites = [], isLoading: isLoadingFavorites } =
    useGetFavorites();
  const addFavoriteMutation = useAddFavoriteMutation();
  const removeFavoriteMutation = useRemoveFavoriteMutation();
  const isFavorite: boolean = useMemo(() => {
    return favorites.some(({ productId:id }) => id === productId);
  }, [favorites, productId]);

  const handleToggleFavorite = async () => {
    if (isLoadingFavorites) return;

    if (isFavorite) {
      await removeFavoriteMutation.mutateAsync(productId);
    } else {
      await addFavoriteMutation.mutateAsync(productId);
    }
  };
  const loading = addFavoriteMutation.isPending || removeFavoriteMutation.isPending || isLoadingFavorites;
  return {
    isFavorite,
    loading,
    handleToggleFavorite,
  };
};
