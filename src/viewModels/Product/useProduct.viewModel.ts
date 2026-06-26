import { createElement } from "react";
import { useGetCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinity.query";
import { useGetProductDetails } from "../../shared/queries/product/use-get-product-details";
import { useCartStore } from "../../shared/store/cart-store";
import { useModalStore } from "../../shared/store/modal-store";
import { ModalCart } from "../../shared/components/ModalCart/ModalCart";
import { router } from "expo-router";

export const useProductViewModel = (productId: number) => {
  const { data: product, isLoading, error } = useGetProductDetails(productId);

  const {
    comments,
    isLoading: getCommentsLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: getCommentsError,
    isFetchingNextPage,
    isRefetching,
  } = useGetCommentsInfiniteQuery(productId);

  const { addProduct } = useCartStore();
  const {open, close} = useModalStore();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefetch = () => {
    if (!isRefetching) {
      refetch();
    }
  };

  const handleEndReached = () => {
    handleLoadMore();
  };

  const onGoToCart = () => {
    router.push("/private/(tabs)/cart");
    close();
  };

  const onContinueShopping = () => {
    router.push("/private/(tabs)/home");
    close();
  };

  const handleAddToCart = () => {
    if (!product) return;
    addProduct({
        id: product.id,
        name: product.name,
        price: product.value,
        image: product.photo,
    })

    open(createElement(ModalCart,{
        productName: product.name,
        onGoToCart: onGoToCart,
        onClose: () => close,
        onContinueShopping: onContinueShopping,
    }))
  };

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
    isRefetching,
    isFetchingNextPage,
    handleAddToCart,
  };
};
