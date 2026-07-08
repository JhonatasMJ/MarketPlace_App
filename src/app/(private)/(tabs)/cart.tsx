import { Text, View } from "react-native";
import { useCartViewModel } from "../../../viewModels/Cart/useCart.viewModel";
import { CartView } from "../../../viewModels/Cart/Cart.view";

export default function Cart() {
    const viewModel = useCartViewModel()
    return (
        <CartView {...viewModel} />
    )
}