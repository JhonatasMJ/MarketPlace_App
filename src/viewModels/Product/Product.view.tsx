import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useProductViewModel } from "./useProduct.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductHeader } from "../../shared/components/ProductHeader";
import { CommentItem } from "../../shared/components/CommentItem/CommentItem";
import { ListFooter } from "../../shared/components/ListFooter/ListFooter";
import { EmptyList } from "../../shared/components/EmptyList/EmptyList";
import { Loading } from "../../shared/components/Loading/Loading";
import { Error } from "../../shared/components/Error/Error";
import { FooterCart } from "../../shared/components/FooterCart/FooterCart";

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  product,
  isLoading,
  error,
  comments,
  getCommentsLoading,
  handleAddToCart,
  handleRefetch,
  handleEndReached,
  isRefetching,
  isFetchingNextPage,
}) => {
  if (error) return <Error />;

  if (isLoading || !product) return <Loading />;

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <FlatList
        className="px-6"
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={<ProductHeader productDetails={product} />}
        onEndReached={handleEndReached}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        ListFooterComponent={<ListFooter isLoadingMore={isFetchingNextPage} />}
        ListEmptyComponent={
          <EmptyList isLoadingComments={getCommentsLoading} />
        }
        contentContainerClassName="pb-6"
      />
      <FooterCart product={product} handleAddToCart={handleAddToCart} />
    </SafeAreaView>
  );
};
