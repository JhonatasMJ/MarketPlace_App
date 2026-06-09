import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useFilterViewModel } from "./useFilter.viewModel";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import Checkbox from "expo-checkbox";

export const FilterView: FC<ReturnType<typeof useFilterViewModel>> = ({
  productCategories,
  isLoading,
}) => {
  return (
    <View>
      <View className="flex-row items-center justify-between p-4 px-6">
        <Text className="text-lg font-bold text-gray-900">Filter anúncios</Text>
        <TouchableOpacity>
          <Ionicons name="close" size={20} color={colors["purple-base"]} />
        </TouchableOpacity>
      </View>
      <View className="p-4 px-6">
        <Text className="font-semibold text-base text-gray-300">VALOR</Text>
        <View className="flex-row mb-4 w-[100%]">
          <View className="flex-1">
            <Input
              placeholder="De"
              keyboardType="numeric"
              containerClassName="w-[90%]"
            />
          </View>
          <View className="flex-1">
            <Input
              placeholder="De"
              keyboardType="numeric"
              containerClassName="w-[90%]"
            />
          </View>
        </View>
        <Text className="font-semibold text-base text-gray-300">CATEGORIA</Text>
        {isLoading ? (
          <Text>
            Carregando categorias...
          </Text>
        ) : (
         <View className="mb-6 gap-3">
            {productCategories?.map(({name, id}) => (
              <TouchableOpacity className="flex-row items-center py-2" key={`product-category-${id}`}>
                <Checkbox color={colors["purple-base"]} className="mr-3 rounded-md" />
                <Text className="text-base text-gray-400">{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View className="flex-row gap-3 mt-4 mb-6">
          <View className="flex-1">
            <Button variant="outlined">Limpar filtro</Button>
          </View>
          <View className="flex-1">
            <Button>Limpar filtro</Button>
          </View>
        </View>
      </View>
    </View>
  );
};
