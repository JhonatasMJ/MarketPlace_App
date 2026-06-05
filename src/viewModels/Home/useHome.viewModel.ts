import { useProductInfiniteQuery } from "../../shared/queries/product/user-product-infinite.query";
import { useUserStore } from "../../shared/store/user-store";

export const useHomeViewModel = () => {
  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery();

  const { logout } = useUserStore();

  /* Função para carregar mais produtos, caso exista mais produtos e não esteja carregando mais produtos */
  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  const handleRefresh = async () => {
    await refetch();
  };

  const handleEndReached = () => {
    handleLoadMore();
  }

  const handleLogout = () => { 
    logout();
  }
  
  return {
    handleLoadMore,
    handleRefresh,
    products,
    handleEndReached,
    handleLogout,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  };
};
