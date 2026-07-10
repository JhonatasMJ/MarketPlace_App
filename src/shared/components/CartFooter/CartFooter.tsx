import { Text, TouchableOpacity, View } from "react-native";
import { PriceText } from "../PriceText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { Button } from "../Button/Button";
import { useCartStore } from "../../store/cart-store";

export const CartFooter = () => {
  const {total} = useCartStore()
  return (
    <View className="bg-white p-4 rounded-lg mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-sm font-semibold text-gray-600">VALOR TOTAL</Text>
        <PriceText
          value={total}
          classNameCurrency="text-base text-gray-900 font-bold"
          classNameValue="text-base text-gray-900 font-bold"
        />
      </View>
      <View className="mb-4">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-[10px] font-semibold text-gray-600">
            CARTÕES DE CRÉDITO
          </Text>
          <TouchableOpacity className="flex-row items-center ">
            <Ionicons
              name="card-outline"
              size={20}
              color={colors["purple-base"]}
            />
            <Text className="text-purple-base ml-2 text-sm font-bold">
              Adicionar Cartão
            </Text>
          </TouchableOpacity>
        </View>
       <Button className="mt-4">
        Confirmar compra
       </Button>
      </View>
    </View>
  );
};
