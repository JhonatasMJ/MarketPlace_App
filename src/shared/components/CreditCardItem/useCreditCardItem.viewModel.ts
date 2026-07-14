import { GetCreditCard } from "../../interfaces/credit-card";
import { format } from "date-fns";

export const useCreditCardItemViewModel = (creditCard: GetCreditCard) => {
  const formatExpirationDate = format(creditCard.expirationDate, "dd/yyyy");

  // Ocultar os 8 primeiros dígitos do cartão, exibindo apenas os últimos 4 dígitos
  const formatedCardNumber = creditCard.number.slice(-4);

  return {
    creditCard,
    formatExpirationDate,
    formatedCardNumber,
  };
};
