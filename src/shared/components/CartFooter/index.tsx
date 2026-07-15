import { FC } from "react";
import { GetCreditCard } from "../../interfaces/credit-card";
import { CartFooterView } from "./CartFooter.view";
import { useCartFooterViewModel } from "./useCartFooter.viewModel";

export interface CartFooterProps {
  openCartBottomSheet: () => void;
  creditCards: GetCreditCard[];
  loadingCreditCards: boolean;
}

export const CartFooter: FC<CartFooterProps> = ({
  openCartBottomSheet,
  creditCards,
  loadingCreditCards,
}) => {
  const viewModel = useCartFooterViewModel();
  return (
    <CartFooterView
      {...viewModel}
      openCartBottomSheet={openCartBottomSheet}
      creditCards={creditCards}
      loadingCreditCards={loadingCreditCards}
    />
  );
};
