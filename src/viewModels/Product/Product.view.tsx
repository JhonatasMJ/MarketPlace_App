import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useProductViewModel } from "./useProduct.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductHeader } from "../../shared/components/ProductHeader";
import { CommentItem } from "../../shared/components/CommentItem/CommentItem";

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  product,
  isLoading,
  error,
  comments,
  getCommentsLoading,
  hasNextPage,
  fetchNextPage,
  refetch,
  getCommentsError,
  handleLoadMore,
  handleRefetch,
  handleEndReached,
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
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={<ProductHeader productDetails={product} />}
      />
    </SafeAreaView>
  );
};
