import { ProductInterface } from "../../../../shared/interfaces/product";
import { ProductCardView } from "./ProductCard.view";
import { useProductCardViewModel } from "./useProductCard.viewModel";

interface ProductCardParams {
    product: ProductInterface;

}

export function ProductCard(value: ProductCardParams) {
    const viewModel = useProductCardViewModel(value);
    return ( 
        <ProductCardView {...viewModel} />
    )
}