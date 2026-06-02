import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../shared/components/Header/Header";
import { SearchInput } from "../../shared/components/SearchInput/SearchInput";
import { ProductInterface } from "../../shared/interfaces/product";
import { ProductCard } from "../../shared/components/ProductCard";

export const HomeView = () => {
  const productsList: ProductInterface[] = [
    {
      id: 1,
      name: "Produto 1",
      description: "Descrição do produto 1",
      photo: "https://via.placeholder.com/150",
      height: "100",
      width: "100",
      weight: "100",
      value: "100",
      averageRating: 5,
      views: 100,
      ratingCount: 100,
      categoryId: 1,
      category: { id: 1, name: "Categoria 1" },
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
      deletedAt: "2021-01-01",
    },
  ];
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        data={productsList}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(id) => `product-list-item-${id}`}
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
