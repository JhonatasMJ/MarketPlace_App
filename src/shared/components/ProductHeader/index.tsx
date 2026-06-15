import { FC } from "react";
import { GetProductDetailInterface } from "../../interfaces/http/product-detail";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { buildImageUrl } from "../../helpers/buildImageUrl";

interface ProductHeaderParams {
  productDetails: GetProductDetailInterface;
}

export const ProductHeader: FC<ProductHeaderParams> = ({ productDetails }) => {
  return (
    <>
      <View className="pb-5 items-start">
        <TouchableOpacity className="w-full justify-start flex-row items-center gap-3">
          <Ionicons name="arrow-back" size={24} color={colors["purple-base"]} />
          <Text className="text-base text-purple-base">Voltar</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full rounded-lg shadow-xl shadow-gray-500/30 bg-white">
        <Image
          source={{ uri: buildImageUrl(productDetails.photo) }}
          className="w-full rounded-lg h-[192px]"
        />
        <View className=" items-center absolute top-0 right-0 flex-row bg-blue-light px-2 py-1 rounded-bl-lg rounded-tr-lg">
          <Ionicons name="star" size={16} color={colors["blue-base"]} />
          <Text className="text-sm font-semibold ml-1 text-gray-800">
            {productDetails.averageRating.toFixed(1)}
          </Text>
          <Text className="text-[10px] font-semibold text-gray-800 ml-1">
            / 5
          </Text>
        </View>
      </View>
    </>
  );
};
