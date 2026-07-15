import { useState } from "react";
import { useCartStore } from "../../store/cart-store";
import { GetCreditCard } from "../../interfaces/credit-card";
import { useSubmitOrderMutation } from "../../queries/orders/use-submit-order.mutation";
import { router } from "expo-router";

export const useCartFooterViewModel = () => {
  const { total, products, clearCart } = useCartStore();
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | GetCreditCard>(null);

    const createOrderMutation = useSubmitOrderMutation();

    const submitOrderMutation = async () => {
      if (!selectedCreditCard) {
        return;
      }
      await createOrderMutation.mutateAsync({
        creditCardId: selectedCreditCard?.id,
        items: products.map(({id, quantity}) => ({
          productId: id,
          quantity,
        })),
      })
      clearCart();
      router.push("/orders")
    }

  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
    submitOrderMutation,
    isOrderLoading: createOrderMutation.isPending
  };
};
