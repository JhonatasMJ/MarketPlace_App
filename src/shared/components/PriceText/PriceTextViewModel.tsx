import { FC } from "react";
import { Text, View } from "react-native";
import { usePriceTextViewModel } from "./usePriceTextViewModel";

export const PriceTextView: FC<ReturnType<typeof usePriceTextViewModel > & {
    classNameCurrency?: string;
    classNameValue?: string;
}> = ({
  classNameCurrency,
  classNameValue,
  currencySymbol,
  valueText,
  value,
}) => {
  return (
    <View className="flex-row items-baseline">
      <Text className={classNameCurrency ?? "text-sm text-gray-900"}>{currencySymbol}</Text>
      <Text className={classNameValue ?? "text-2xl font-bold text-gray-900"}>{valueText}</Text>
    </View>
  );
};
