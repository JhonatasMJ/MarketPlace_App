import { Text, View } from "react-native";
import { useProductCardViewModel } from "./useProductCard.viewModel";
import { FC } from "react";

export const ProductCardView: FC<
  ReturnType<typeof useProductCardViewModel>
> = ({ product }: ReturnType<typeof useProductCardViewModel>) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};
