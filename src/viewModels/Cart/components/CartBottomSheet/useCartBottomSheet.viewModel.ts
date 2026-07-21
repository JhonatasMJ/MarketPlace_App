import { useForm } from "react-hook-form";
import { useCreateCreditCardMutation } from "../../../../shared/queries/credit-cards/use-create-credit-card.mutation";
import {
  CreditCardFormData,
  creditCardSchema,
} from "../../../../shared/schemas/credit-card";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBottomSheetStore } from "../../../../shared/store/bottomSheet-store";
import { useRef, useState } from "react";

export type FocusedField = "number" | "name" | "expirationDate" | "cvv"

const formatExpirationDate = (
  dateString: string,
  setError: (message: string) => void,
): string => {
  const [month, year] = dateString.split("/").map(Number);
  if (month < 1 || month > 12) {
    setError("Mês inválido");
    throw new Error("Mês inválido");
  }

  if (year < 0 || year > 99) {
    setError("Ano inválido");
    throw new Error("Ano inválido");
  }

  const fullYear = 2000 + year;
  const expirationDate = new Date(fullYear, month, 0);
  const isoDate = expirationDate.toISOString().split("T")[0];
  return isoDate;
};

export const useCartBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation();
  const [focusedField, setFocusedField] = useState<FocusedField | null>(null);

  const blurTimeOutRef = useRef<NodeJS.Timeout | null>(null);

  const { control, handleSubmit, reset, watch, clearErrors, setError } =
    useForm<CreditCardFormData>({
      resolver: yupResolver(creditCardSchema),
      defaultValues: {
        titularName: "",
        CVV: "",
        expirationDate: "",
        number: "",
      },
    });

  const { close } = useBottomSheetStore();

  const handleCreateCreditCard = handleSubmit(
    async ({ CVV, expirationDate: rawExpirationDate, number }) => {
      const expirationDate = formatExpirationDate(
        rawExpirationDate,
        (message) => setError("expirationDate", { message }),
      );
      const cleanedNumber = number.replace(/\s/g, "");
      await createCreditCardMutation.mutateAsync({
        CVV: Number(CVV),
        expirationDate,
        number: cleanedNumber,
      });
      close();
    },
  );

  const expirationDateMask = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length < 2) return cleaned;
    const month = cleaned.slice(0, 2);
    const year = cleaned.slice(2, 4);

    if (year.length > 0) {
      return `${month}/${year}`;
    }

    return month;
  };

  const cardNumberMask = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  const handleFieldFocus = (field: FocusedField) => {
    if (blurTimeOutRef.current) {
      clearTimeout(blurTimeOutRef.current);
    }
    setFocusedField(field);
  }

  const handleFieldBlur = () => {
    blurTimeOutRef.current = setTimeout(() => {
      setFocusedField(null);
    }, 50);
  }

  const isFlipped =  focusedField === "cvv"

  const watchedValue = watch()

  return {
    handleCreateCreditCard,
    control,
    handleSubmit,
    reset,
    watch,
    clearErrors,
    expirationDateMask,
    cardNumberMask,
    isFlipped,
    handleFieldFocus,
    handleFieldBlur,
    focusedField,
    cardData: {
      number: watchedValue.number,
      name: watchedValue.titularName,
      expirationDate: watchedValue.expirationDate,
      CVV: watchedValue.CVV,
    }
  };
};
