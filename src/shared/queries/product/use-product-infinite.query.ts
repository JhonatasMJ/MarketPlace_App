import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product.service";
import { buildImageUrl } from "../../helpers/buildImageUrl";
import { FilterState } from "../../store/use-filter-store";

interface productInfinityQueryParams {
  filters?: FilterState;
}

export const useProductInfiniteQuery = ({filters}: productInfinityQueryParams) => {
  /* Hook para buscar produtos de forma infinita */
  const {
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
    data,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
         filters: {
          ...filters,
          searchText: filters?.searchText ?? undefined,
          minValue: filters?.valueMin ?? undefined,
          maxValue: filters?.valueMax ?? undefined,
          categoryId: filters?.selectedCategories ?? [],
         }
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
    /* Chave de consulta para o cache, ao inves de chamar a api toda vez, o cache vai ser usado para buscar os dados */
    queryKey: ["products", filters],
    staleTime: 1000 * 60 * 60, // 60 minutos

  });

  const products =
    data?.pages
      .flatMap((page) => page.data)
      .map((product) => ({
        ...product,
        photo: buildImageUrl(product.photo),
      })) ?? [];

  return {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  };
};
