import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../../../shared/components/Input/Input";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";
import { useBottomSheetStore } from "../../../../shared/store/bottomSheet-store";
import { Filter } from "../Filter";

interface SearchInputParams {
  searchInputText: (text: string) => void;
  inputValue: string;
}
export function SearchInput({ searchInputText, inputValue }: SearchInputParams) {
  const { open } = useBottomSheetStore();

  return (
    <View className="mb-3 mt-6">
      <Text className="text-2xl font-bold mt-6 ">Explore Produtos</Text>
      <View className="flex-row">
        <View className="flex-1">
          <Input
            onChangeText={searchInputText}
            leftIcon="search"
            placeholder="Pesquisar produto"
            className="text-lg flex-1"
            value={inputValue}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            open({ content: <Filter />, config: { snapPoints: ["50%"] } })
          }
          className="ml-5 mt-14 items-center justify-center rounded-md border h-12 w-12 border-purple-base"
        >
          <Ionicons
            name="filter-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
