import { GetCreditCard } from "../../interfaces/credit-card";
import { CreditCardItemView } from "./CreditCardItem.view";
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel";

interface CreditCardItemParams {
  creditCard: GetCreditCard;
  isSelected: boolean;
  setSelectedCreditCard: (creditCard: GetCreditCard) => void;
}

export const CreditCardItem = ({
  creditCard,
  isSelected,
  setSelectedCreditCard,
}: CreditCardItemParams) => {
  const viewModel = useCreditCardItemViewModel(creditCard);
  return (
    <CreditCardItemView
      {...viewModel}
      isSelected={isSelected}
      setSelectedCreditCard={setSelectedCreditCard}
    />
  );
};
