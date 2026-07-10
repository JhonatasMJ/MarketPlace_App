import { FC } from "react"
import { FlatList, Text, View } from "react-native"
import { useCartViewModel } from "./useCart.viewModel"
import { SafeAreaView } from "react-native-safe-area-context"
import { CartCard } from "../../shared/components/CartCard";
import { EmptyListCart } from "../../shared/components/EmptyListCart/EmptyListCart"
import { CartHeader } from "../../shared/components/CartHeader/CartHeader"
import { CartFooter } from "../../shared/components/CartFooter/CartFooter"

export const CartView:FC <ReturnType<typeof useCartViewModel>>= ({
    products,
    openCartBottomSheet
}) => {
    return (
        <SafeAreaView>
            <FlatList
            contentContainerClassName="px-6"
            data={products}
            renderItem={({item}) => <CartCard product={item} />}
            keyExtractor={(id) => `product-cart-id${id}`}
            ListEmptyComponent={<EmptyListCart />}
            ListHeaderComponent={<CartHeader />}
            ListFooterComponent={products.length > 0 ? <CartFooter openCartBottomSheet={openCartBottomSheet} /> :null}
            />
        </SafeAreaView>
    )
}