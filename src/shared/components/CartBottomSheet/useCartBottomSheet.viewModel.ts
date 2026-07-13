import { useCreateCreditCardMutation } from "../../queries/credit-cards/use-create-credit-card.mutation";

export const useCartBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation();

  const handleCreateCreditCard = () => {
    createCreditCardMutation.mutate({
      CVV: 123,
      expirationDate: "",
      number: "",
    });
  };
  return {
    handleCreateCreditCard,
  };
};
