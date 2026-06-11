import { PriceTextView } from "./PriceTextViewModel"
import { usePriceTextViewModel } from "./usePriceTextViewModel";

interface PriceTextParams {
    classNameCurrency?: string;
    classNameValue?: string;
    value: number;

}

export const PriceText = ({ classNameCurrency, classNameValue, value }: PriceTextParams) => {

    const viewModel = usePriceTextViewModel({ classNameCurrency, classNameValue, value });

    return (
        <PriceTextView {...viewModel} classNameCurrency={classNameCurrency} classNameValue={classNameValue} />
    )
}