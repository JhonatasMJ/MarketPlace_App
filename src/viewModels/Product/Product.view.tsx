import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useProductViewModel } from "./useProduct.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductHeader } from "../../shared/components/ProductHeader";
import { CommentItem } from "../../shared/components/CommentItem/CommentItem";
import { ListFooter } from "../../shared/components/ListFooter/ListFooter";
import { EmptyList } from "../../shared/components/EmptyList/EmptyList";
import { Loading } from "../../shared/components/Loading/Loading";

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
  isRefetching,
  isFetchingNextPage,
}) => {
  if (error) {
    <Text>Erro ao carregar ao carregar os detalhes do produto</Text>;
  }

  if (!product) {
    return null;
    
  }
  if(isLoading) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        className="px-6"
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={<ProductHeader productDetails={product} />}
        onEndReached={handleEndReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        ListFooterComponent={<ListFooter isLoadingMore={isFetchingNextPage} />}
        ListEmptyComponent={<EmptyList isLoadingComments={getCommentsLoading} />}
      />
    </SafeAreaView>
  );
};
