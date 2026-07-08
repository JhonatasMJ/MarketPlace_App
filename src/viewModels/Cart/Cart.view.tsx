import { FC } from "react"
import { FlatList, Text, View } from "react-native"
import { useCartViewModel } from "./useCart.viewModel"
import { SafeAreaView } from "react-native-safe-area-context"
import { CartCard } from "../../shared/components/CartCard/CartCard"

export const CartView:FC <ReturnType<typeof useCartViewModel>>= ({
    products
}) => {
    return (
        <SafeAreaView>
            <FlatList
            contentContainerClassName="px-6"
            data={products}
            renderItem={({item}) => <CartCard product={item} />}
            keyExtractor={(id) => `product-cart-id${id}`}
            
            />
        </SafeAreaView>
    )
}