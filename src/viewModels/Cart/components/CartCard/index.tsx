import { CartProduct } from "../../../../shared/store/cart-store";
import { CartCardView } from "./CartCard.view"
import { useProductCardViewModel } from "./useCartCard.viewModel";

interface CartCard {
    product: CartProduct;
}

export const CartCard = ({ product }: CartCard) => {

    const viewModel = useProductCardViewModel()
    return (
        <CartCardView product={product} {...viewModel} />
    )
}