import { useProductInfiniteQuery } from "../../shared/queries/product/user-product-infinite.query";

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
  
  return {
    handleLoadMore,
    handleRefresh,
    products,
    handleEndReached,
  };
};
