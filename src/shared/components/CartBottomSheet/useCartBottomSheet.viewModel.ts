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

  const expirationDateMask = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length < 2) return cleaned;
    const month = cleaned.slice(0, 2);
    const year = cleaned.slice(2, 4);

    if(year.length > 0) {
      return `${month}/${year}`;
    }

    return month;

  }

  const cardNumberMask = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }



  return {
    handleCreateCreditCard,
    control,
    handleSubmit,
    reset,
    watch,
    clearErrors,
    expirationDateMask,
    cardNumberMask,
  };
};
