import { useState } from "react";
import { useCartStore } from "@/shared/store/cart-store";
import { GetCreditCard } from "@/shared/interfaces/credit-card";
import { useSubmitOrderMutation } from "@/shared/queries/orders/use-submit-order.mutation";
import { router } from "expo-router";
import { useModal } from "@/shared/hooks/useModal";
import { LocalNotificationsService } from "@/shared/services/local.notifications.service";

export const useCartFooterViewModel = () => {
  const { total, products, clearCart } = useCartStore();
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<null | GetCreditCard>(null);
    const { showSuccess } = useModal();

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

      const firstProduct = products[0];
      if (firstProduct) {
        LocalNotificationsService.scheduleFeedbackNotification({
          productName: firstProduct.name,
          productId: firstProduct.id,
          delayInMinutes: 60,
      });
    }

      clearCart();
      showSuccess({
        title: "Sucesso",
        message: "Pedido Feito com Sucesso.",
        buttonText: "Ver Pedidos",
        onButtonPress: () => {
          router.push("/orders");
        },
      });
    }

  return {
    total,
    selectedCreditCard,
    setSelectedCreditCard,
    submitOrderMutation,
    isOrderLoading: createOrderMutation.isPending
  };
};
