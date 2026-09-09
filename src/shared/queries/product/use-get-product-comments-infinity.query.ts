import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductComments } from "@/shared/services/product.service";
import { buildImageUrl } from "@/shared/helpers/buildImageUrl";
import { ProductCommentInterface } from "@/shared/interfaces/product-commets";
import { baseURL } from "@/shared/api/market-place";

export const useGetCommentsInfiniteQuery = (productId: number) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      getProductComments({
        productId,
        pagination: {
          page: pageParam,
          perPage: 20,
        },
      }),
    queryKey: ["product-comments", productId],
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  // Retorna todos os comentários em um array
  const comments =
    (query.data?.pages
      .flatMap((page) => page.data)
      .map((comment) => ({
        ...comment,
        user: {
          ...comment.user,
          avatar: {
            url: comment.user.avatar?.url
              ? buildImageUrl(`${baseURL}${comment.user.avatar.url}`)
              : "",
          },
        },
      })) as ProductCommentInterface[]) ?? [];

  return {
    ...query,
    comments,
  };
};
