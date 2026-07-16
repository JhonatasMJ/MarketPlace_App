import { CartBottomSheetView } from "./CartBottomSheet.view"
import { useCartBottomSheetViewModel } from "./useCartBottomSheet.viewModel"


export const CartBottomSheet = () => {

    const viewModel = useCartBottomSheetViewModel()
    return <CartBottomSheetView {...viewModel} />
}