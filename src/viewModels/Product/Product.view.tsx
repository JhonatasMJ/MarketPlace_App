import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useProductViewModel } from "./useProduct.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  product,
  isLoading,
  error,
}) => {
  if (error) {
    <Text>Erro ao carregar ao carregar os detalhes do produto</Text>;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => <Text>{product?.name}</Text>}
      />
    </SafeAreaView>
  );
};
