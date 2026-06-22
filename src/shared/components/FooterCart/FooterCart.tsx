import { Text, View } from "react-native"
import { ProductInterface } from "../../interfaces/product"
import { PriceText } from "../PriceText"
import { Button } from "../Button/Button"

interface FooterCartParams {
    product: ProductInterface
}

export const FooterCart = ({ product }: FooterCartParams) => {
    return (
        <View className="fixed bg-white bottom-0 right-0 left-0 p-7 h-[126px] flex-row justify-between items-center">
                <PriceText value={Number(product.value)} />
            <Button className="w-[120px] h-[40px] rounded-md" leftIcon="cart">
                Adicionar
            </Button>
        </View>
    )
}