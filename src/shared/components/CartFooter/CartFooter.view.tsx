import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PriceText } from "../PriceText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { Button } from "../Button/Button";
import { FC } from "react";
import { CreditCardItem } from "../CreditCardItem";
import { useCartFooterViewModel } from "./useCartFooter.viewModel";
import { CartFooterProps } from ".";

export const CartFooterView: FC<
  ReturnType<typeof useCartFooterViewModel> & CartFooterProps
> = ({
  total,
  openCartBottomSheet,
  creditCards,
  loadingCreditCards,
  selectedCreditCard,
  setSelectedCreditCard,
}) => {
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
        {loadingCreditCards ? (
          <View className="py-4 items-center">
            <ActivityIndicator size="small" color={colors["purple-base"]} />
            <Text className="text-sm text-gray-500 mt-2">
              Carregando cartões
            </Text>
          </View>
        ) : (
          <FlatList
            className="gap-2"
            data={creditCards}
            renderItem={({ item }) => (
              <CreditCardItem
                creditCard={item}
                isSelected={item.id === selectedCreditCard?.id}
                setSelectedCreditCard={setSelectedCreditCard}
              />
            )}
          />
        )}

        <Button className="mt-4" onPress={openCartBottomSheet}>
          Confirmar compra
        </Button>
      </View>
    </View>
  );
};
