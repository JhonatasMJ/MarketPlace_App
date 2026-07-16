import { FC } from "react"
import { FlatList, Text, View } from "react-native"
import { useCartViewModel } from "./useCart.viewModel"
import { SafeAreaView } from "react-native-safe-area-context"
import { CartCard } from "./components/CartCard";
import { EmptyListCart } from "./components/EmptyListCart/EmptyListCart"
import { CartHeader } from "./components/CartHeader/CartHeader"
import { CartFooter } from "./components/CartFooter"

export const CartView:FC <ReturnType<typeof useCartViewModel>>= ({
    products,
    openCartBottomSheet,
    creditCards,
    loadingCreditCards,
}) => {
    return (
        <SafeAreaView className="flex-1">
            <FlatList
            contentContainerClassName="px-6"
            data={products}
            renderItem={({item}) => <CartCard product={item} />}
            keyExtractor={(id) => `product-cart-id${id}`}
            ListEmptyComponent={<EmptyListCart />}
            ListHeaderComponent={<CartHeader />}
            ListFooterComponent={products.length > 0 ? <CartFooter openCartBottomSheet={openCartBottomSheet} creditCards={creditCards} loadingCreditCards={loadingCreditCards} /> :null}
            />
        </SafeAreaView>
    )
}