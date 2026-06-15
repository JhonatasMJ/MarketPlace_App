import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useProductViewModel } from "./useProduct.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductHeader } from "../../shared/components/ProductHeader";

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  product,
  isLoading,
  error,
}) => {
  if (error) {
    <Text>Erro ao carregar ao carregar os detalhes do produto</Text>;
  }

  if (!product) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        className="px-6"
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={<ProductHeader productDetails={product} />}
      />
    </SafeAreaView>
  );
};
