import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCard } from "../../shared/components/ProductCard";
import { useHomeViewModel } from "./useHome.viewModel";
import { FC} from "react";
import { Footer } from "../../shared/components/Footer/Footer";
import { colors } from "../../styles/colors";
import { RenderHeader } from "../../shared/components/RenderHeader/RenderHeader";



export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  products,
  handleEndReached,
  handleLogout,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  handleRefresh,
  isRefetching,
  searchInputText,
  setSearchInputText,
}) => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => `product-list-item-${item.id}`}
        numColumns={2}
        columnWrapperClassName="justify-between"
        onEndReached={handleEndReached}
        ListFooterComponent={
          <Footer
            isLoading={hasNextPage && Boolean(isLoading && isFetchingNextPage)}
          />
        }
        ListHeaderComponent={
          <RenderHeader
            setSearchInputText={setSearchInputText}
            searchInputText={searchInputText}
          />
        }
        contentContainerClassName="px-[16px] pb-[120px]"
        refreshControl={
          <RefreshControl
            colors={[colors["purple-base"]]}
            tintColor={colors["purple-base"]}
            refreshing={isRefetching}
            onRefresh={handleRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};
