import { Image, Text, TouchableOpacity, View } from "react-native";
import { useProductCardViewModel } from "./useProductCard.viewModel";
import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";

export const ProductCardView: FC<
  ReturnType<typeof useProductCardViewModel>
> = ({ product }: ReturnType<typeof useProductCardViewModel>) => {
  return (
    <TouchableOpacity className="w-[48%] my-1 rounded-lg shadow-sm overflow-hidden h-[157px] p-[4px] bg-white mb-2">
      <View>
        <Image
          source={{ uri: product.photo }}
          className="w-full h-[96px] rounded-md "
          resizeMode="cover"
        />

        <View className="absolute top-0 right-0 flex-row items-center px-2 py-1 rounded-b-md rounded-r-none bg-white">
          <Ionicons name="star" size={12} color={colors["blue-base"]} />
          <Text className="text-sm text-blue-base font-semibold ml-1">
            {product.ratingCount}
          </Text>
        </View>
      </View>
      <View className="p-3 ">
        <Text className="text-xs mb-1 font-semibold" numberOfLines={2}>
          {product.name}
        </Text>
        <View className="flex-row items-center justify-between">
            <Text>R$ {product.value}</Text>
        </View>
      </View>
      <Text>{product.name}</Text>
    </TouchableOpacity>
  );
};