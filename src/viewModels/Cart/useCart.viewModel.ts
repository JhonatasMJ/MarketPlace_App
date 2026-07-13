import { createElement } from "react";
import { useBottomSheetStore } from "../../shared/store/bottomSheet-store";
import { useCartStore } from "../../shared/store/cart-store";
import { CartBottomSheet } from "../../shared/components/CartBottomSheet";
import { useGetCreditCards } from "../../shared/queries/credit-cards/use-get-credit-cards.query";


export const useCartViewModel = () => {
  const { products } = useCartStore();
  const { open: openBottomSheet } = useBottomSheetStore();
  const {data: creditCards = [], isLoading: loadingCreditCards} = useGetCreditCards();

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
    creditCards,
  };
};
