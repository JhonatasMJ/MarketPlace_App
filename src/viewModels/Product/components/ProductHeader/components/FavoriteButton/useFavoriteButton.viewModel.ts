import { useGetFavorites } from "@/shared/queries/favorites/use-get-favorites.query";
import { useMemo } from "react";

export const useFavoriteButtonViewModel = (productId: number) => {
  const { data: favorites = [], isLoading: isLoadingFavorites } =
    useGetFavorites();
  const isFavorite: boolean = useMemo(() => {
    return favorites.some(({ id }) => id === productId);
  }, [favorites, productId]);

  return {
    isFavorite,
  };
};
