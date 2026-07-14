import { Text, TouchableOpacity, View } from "react-native";
import { GetCreditCard } from "../../interfaces/credit-card";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";

interface CreditCardItemParams {
  creditCard: GetCreditCard;
}

export const CreditCardItem = ({ creditCard }: CreditCardItemParams) => {
  return (
    <TouchableOpacity className="p-4 rounded-lg border bg-white border-gray-100 ">
      <View className="flex-row justify-between">
        <View className="mr-4">
          <Ionicons
            name="card-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </View>
        <View className="flex-1">
          <Text className="text-base font-semibold">{creditCard.number}</Text>
          <Text className="text-sm text-gray-500 mt-1">Vencimento: {creditCard.expirationDate?.toString()}</Text>
        </View>
        <TouchableOpacity>
            <Ionicons name="pencil" size={24} color={colors["purple-base"]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
