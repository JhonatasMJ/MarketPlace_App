import { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCartBottomSheetViewModel } from "./useCartBottomSheet.viewModel";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const CartBottomSheetView: FC<
  ReturnType<typeof useCartBottomSheetViewModel>
> = ({handleCreateCreditCard}) => {
  return (
    <ScrollView className="flex-1">
      <View className="p-8">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="font-bold text-2xl text-gray-900">
            Adicionar cartão
          </Text>
          <TouchableOpacity className="w-8 h-8 items-center justify-center border border-gray-400 rounded-md">
            <Ionicons name="close" size={24} color={colors.gray[400]} />
          </TouchableOpacity>
        </View>
        <View className="mt-6 gap-4">
          <Input
            leftIcon="person-outline"
            label="NOME DO TITULAR"
            placeholder="Nome Completo"
          />

          <View className="flex-row gap-2">
            <View className="flex-1">
              <Input
                leftIcon="calendar-outline"
                label="VENCIMENTO"
                placeholder="MM/AA"
                keyboardType="numeric"
                maxLength={5}
              />
            </View>
            <View className="flex-1">
              <Input
                leftIcon="lock-closed-outline"
                label="CVV"
                placeholder="000"
                keyboardType="numeric"
                maxLength={5}
              />
            </View>
          </View>
        </View>
        <View className="flex-row gap-4 pb-5 mt-8">
          <View className="flex-1">
            <Button variant="outlined">Cancelar</Button>
          </View>
          <View className="flex-1">
            <Button>Salvar</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
