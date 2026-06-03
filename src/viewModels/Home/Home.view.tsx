import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../shared/components/Header/Header";
import { SearchInput } from "../../shared/components/SearchInput/SearchInput";
import { ProductCard } from "../../shared/components/ProductCard";
import { useHomeViewModel } from "./useHome.viewModel";
import { FC } from "react";

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
  products,
  handleEndReached,
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
        ListHeaderComponent={() => (
          <>
            <Header />
            <SearchInput />
          </>
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  );
};
