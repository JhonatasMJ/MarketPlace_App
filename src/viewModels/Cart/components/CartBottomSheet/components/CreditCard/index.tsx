import { FocusedField } from "../../useCartBottomSheet.viewModel";
import { CreditCardView } from "./CreditCard.view";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";

export interface CardData {
    number: string;
    name: string;
    expirationDate: string;
    CVV: string;
}
interface CreditCardProps {
    isFlipped: boolean;
    focusedField: FocusedField | null;
    cardData: CardData;
}

export const CreditCard = ({ isFlipped, focusedField, cardData  }: CreditCardProps) => {

    const viewModel = useCreditCardViewModel(isFlipped);

    return <CreditCardView {...viewModel} focusedField={focusedField} cardData={cardData} />
}