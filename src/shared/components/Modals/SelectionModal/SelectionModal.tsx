import { Text, TouchableOpacity, View } from "react-native";
import { SelectionOptions, SelectionVariants } from "../../../hooks/useModal";
import { Ionicons } from "@expo/vector-icons";
import clsx from "clsx";
import { colors } from "../../../../styles/colors";

export interface SelectionModalProps {
  title: string;
  message?: string;
  options: SelectionOptions[];
}

export function SelectionModal({
  title,
  message,
  options,
}: SelectionModalProps) {
  const getButtonClass = (variant: SelectionVariants) =>
    clsx(
      "w-full py-3 px-4 rounded-md items-center flex-row justify-center mb-2",
      {
        "bg-purple-base": variant === "primary",
        "bg-blue-dark": variant === "secondary",
        "bg-danger": variant === "danger",
      },
    );

  return (
    <View className="bg-white rounded-md shadow-2xl w-[85%] mx-auto max-w-sm p-6">
      <View className="items-center">
        <Text className="text-lg font-bold text-gray-900 mb-3">{title}</Text>
        {message && (
          <Text className="text-base text-gray-600 mb-6 leading-6 text-center">
            {message}
          </Text>
        )}
      </View>
      <View className="gap-3">
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            className={getButtonClass(option.variant || "primary")}
            onPress={option.onPress}
          >
            {option.icon && (
              <Ionicons 
              name={option.icon} 
              size={20} 
              color={colors.white}
              className="mr-2"
               />
            )}
            <Text className="font-semibold text-white">{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
