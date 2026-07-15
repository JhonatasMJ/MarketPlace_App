import { useState } from "react";
import { useCartStore } from "../../store/cart-store";
import { GetCreditCard } from "../../interfaces/credit-card";

export const useCartFooterViewModel = () => {
  const { total } = useCartStore();
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | GetCreditCard>(null);

  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
  };
};
