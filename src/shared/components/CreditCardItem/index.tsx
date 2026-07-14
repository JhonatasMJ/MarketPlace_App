import { GetCreditCard } from "../../interfaces/credit-card";
import { CreditCardItemView } from "./CreditCardItem.view";
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel";

interface CreditCardItemParams {
  creditCard: GetCreditCard;
}

export const CreditCardItem = ({ creditCard }: CreditCardItemParams) => {
  const viewModel = useCreditCardItemViewModel(creditCard);
  return <CreditCardItemView {...viewModel} />;
};
