import { FocusedField } from "../../useCartBottomSheet.viewModel";
import { CreditCardView } from "./CreditCard.view";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";

interface CreditCardProps {
    isFlipped: boolean;
    focusedField: FocusedField | null;
}

export const CreditCard = ({ isFlipped, focusedField }: CreditCardProps) => {

    const viewModel = useCreditCardViewModel(isFlipped);

    return <CreditCardView {...viewModel} focusedField={focusedField} />
}