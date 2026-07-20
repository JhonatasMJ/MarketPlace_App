import { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCartBottomSheetViewModel } from "./useCartBottomSheet.viewModel";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";
import { Button } from "../../../../shared/components/Button/Button";
import { InputController } from "../../../../shared/components/InputController/InputController";
import { CreditCard } from "./components/CreditCard";

export const CartBottomSheetView: FC<
  ReturnType<typeof useCartBottomSheetViewModel>
> = ({
  handleCreateCreditCard,
  control,
  expirationDateMask,
  cardNumberMask,
}) => {
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

          <CreditCard/>
        </View>
        <View className="mt-6 gap-4">
          <InputController
            control={control}
            name="titularName"
            leftIcon="person-outline"
            label="NOME DO TITULAR"
            placeholder="Nome Completo"
          />

          <InputController
            control={control}
            name="number"
            leftIcon="card-outline"
            label="NÚMERO"
            placeholder="Número do cartão"
            mask={cardNumberMask}
            maxLength={19}
          />

          <View className="flex-row gap-2">
            <View className="flex-1">
              <InputController
                control={control}
                name="expirationDate"
                leftIcon="calendar-outline"
                label="VENCIMENTO"
                placeholder="MM/AA"
                keyboardType="numeric"
                maxLength={5}
                mask={expirationDateMask}
              />
            </View>
            <View className="flex-1">
              <InputController
                control={control}
                name="CVV"
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
            <Button onPress={handleCreateCreditCard}>Salvar</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
