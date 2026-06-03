import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product.service";

export const useProductInfiniteQuery = () => {
  /* Hook para buscar produtos de forma infinita */
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
        });
        return response;
      } catch (error) {
        throw error;
      }
    },
    /* Função para obter o próximo parâmetro de paginação, caso o último page seja menor que o total de pages, retorna o próximo page */
    getNextPageParam: (lastPage, pages) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
    /* Parâmetro inicial de paginação */
    initialPageParam: 1,
    /* Chave de consulta para o cache */
    queryKey: ["products"],
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  };
};
