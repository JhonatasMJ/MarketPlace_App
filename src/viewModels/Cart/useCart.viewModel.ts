import { createElement } from "react";
import { useBottomSheetStore } from "../../shared/store/bottomSheet-store";
import { useCartStore } from "../../shared/store/cart-store";
import { CartBottomSheet } from "../../shared/components/CartBottomSheet";

export const useCartViewModel = () => {
  const { products } = useCartStore();
  const { open: openBottomSheet } = useBottomSheetStore();
  const openCartBottomSheet = () => {
    openBottomSheet({
      content: createElement(CartBottomSheet),
      config: {
        snapPoints: ["50%"],
      },
    });
  };
  return {
    products,
    openCartBottomSheet,
  };
};
