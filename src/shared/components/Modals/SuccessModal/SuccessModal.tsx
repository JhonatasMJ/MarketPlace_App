import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../../../styles/colors";
import { Button } from "../../Button/Button";

export interface SuccessModalProps {
    title: string;
    message?: string;
    buttonText?: string;
    onButtonPress?: () => void;
}

export const SuccessModal = ({title, message, buttonText = "Fechar", onButtonPress}: SuccessModalProps) => {
  return (
    <View className="bg-white rounded-2xl p-6 w-[85%] max-w-sm mx-auto">
      <View className="items-center">
        <View className="mb-4 w-16 h-16 bg-green-100 rounded-full items-center justify-center">
          <Ionicons name="checkmark-circle" size={40} color={colors.success} />
        </View>
        <Text className="text-xl font-bold text-gray-900 text-center mb-3">{title}</Text>
        <Text className="text-base text-gray-600 text-center mb-6 leading-6">{message}</Text>
        <Button onPress={onButtonPress}>
          {buttonText}
        </Button>
      </View>
    </View>
  );
};
