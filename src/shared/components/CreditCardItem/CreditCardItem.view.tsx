import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"
import { colors } from "../../../styles/colors"
import { FC } from "react"
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel"

export const CreditCardItemView:FC<ReturnType<typeof useCreditCardItemViewModel>> = ({creditCard, formatExpirationDate, formatedCardNumber}) => {
    return  (
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
            <Text className="text-base">Cartão Final{formatedCardNumber}</Text>
            <Text className="text-sm text-gray-500 mt-1"> {formatExpirationDate}</Text>
          </View>
          <TouchableOpacity>
              <Ionicons name="pencil" size={18} color={colors["purple-base"]} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
}