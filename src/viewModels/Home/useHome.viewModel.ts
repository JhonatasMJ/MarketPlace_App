import { useProductInfiniteQuery } from "../../shared/queries/product/use-product-infinite.query";
import { useFilterStore } from "../../shared/store/use-filter-store";
import { useUserStore } from "../../shared/store/user-store";

export const useHomeViewModel = () => {

  const {appliedFilters} = useFilterStore();
  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
    
  } = useProductInfiniteQuery({ filters: appliedFilters });

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
    isRefetching,
  };
};
