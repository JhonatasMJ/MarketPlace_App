import { useForm } from "react-hook-form";
import { useCreateCreditCardMutation } from "../../queries/credit-cards/use-create-credit-card.mutation";
import {
  CreditCardFormData,
  creditCardSchema,
} from "../../schemas/credit-card";
import { yupResolver } from "@hookform/resolvers/yup";

export const useCartBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation();

  const { control, handleSubmit, reset, watch, clearErrors } =
    useForm<CreditCardFormData>({
      resolver: yupResolver(creditCardSchema),
      defaultValues: {
        titularName: "",
        CVV: "",
        expirationDate: "",
        number: "",
      },
    });

  const handleCreateCreditCard = () => {
    createCreditCardMutation.mutate({
      CVV: 123,
      expirationDate: "",
      number: "",
    });
  };
  return {
    handleCreateCreditCard,
    control,
    handleSubmit,
    reset,
    watch,
    clearErrors,
  };
};
