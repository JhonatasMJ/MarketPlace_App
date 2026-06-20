import { useGetCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinity.query";
import { useGetProductDetails } from "../../shared/queries/product/use-get-product-details";

export const useProductViewModel = (productId:number) => {
    const { data: product, isLoading, error } = useGetProductDetails(productId);

    const {comments, isLoading:getCommentsLoading, hasNextPage, fetchNextPage, refetch, error:getCommentsError, isFetchingNextPage, isRefetching} = useGetCommentsInfiniteQuery(productId);

    const handleLoadMore = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        } 
    }

    const handleRefetch = () => {
        if (!isRefetching) {
            refetch();
        }
    }

    const handleEndReached = () => {
        handleLoadMore();
    }

    return {
        product,
        isLoading,
        error,
        comments,
        getCommentsLoading,
        hasNextPage,
        fetchNextPage,
        refetch,
        getCommentsError,
        handleLoadMore,
        handleRefetch,
        handleEndReached,
    }
}