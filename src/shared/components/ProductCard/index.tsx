import { ProductInterface } from "../../interfaces/product";
import { ProductCardView } from "./ProductCard.view";
import { useProductCardViewModel } from "./useProductCard.viewModel";

interface ProductCardParams {
    product: ProductInterface;

}

export function ProductCard(props: ProductCardParams) {
    const viewModel = useProductCardViewModel(props);
    return (
        <ProductCardView {...viewModel} />
    )
}