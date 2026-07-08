import { Image, Text, TouchableOpacity, View } from "react-native";
import { CartProduct } from "../../store/cart-store";
import { buildImageUrl } from "../../helpers/buildImageUrl";
import { PriceText } from "../PriceText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";

interface CartCardProps {
  product: CartProduct;
}

export const CartCard = ({ product }: CartCardProps) => {
  return (
    <View className="bg-white h-[71px] w-full flex-row items-center justify-center p-3 mb-2 rounded-lg">
      <Image
        source={{ uri: buildImageUrl(product.image ?? "") }}
        className="w-16 h-16 rounded-md mr-4"
        resizeMode="cover"
      />
      <View className="flex-1 mr-3">
        <Text className="text-sm font-normal text-gray-800 mb-1">{product.name}</Text>
        <PriceText classNameCurrency="text-sm font-bold" classNameValue="text-sm  font-bold" value={Number(product.price)} />
      </View>
      <View className="flex-row items-center ">
        <TouchableOpacity className="w-[18px] h-[18px] border-purple-base border-2 rounded-md items-center justify-center">
            <Ionicons name="remove-outline" size={12} color={colors["purple-base"]} />
        </TouchableOpacity>
        <View className="mx-2 items-center justify-center min-w[24px] border-b border-b-gray-300 ">
            <Text className="text-base font-medium text-gray-700">{product.quantity}</Text>
        </View>
        <TouchableOpacity className="w-[18px] h-[18px] border-purple-base border-2 rounded-md items-center justify-center">
            <Ionicons name="add-outline" size={12} color={colors["purple-base"]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
