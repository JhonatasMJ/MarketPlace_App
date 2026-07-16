import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../../../styles/colors";
import { Button } from "../../../../shared/components/Button/Button";

export const Error = () => {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <View className="flex-row items-center justify-center">
        <View className="w-10 h-10 bg-red-300 items-center justify-center rounded-full mb-6">
          <Ionicons name="alert" size={23} color={colors.danger} />
        </View>
        <Text className="text-xl text-danger font-bold">
          Falha ao carregar pedidos
        </Text>
      </View>

      <Button className="mt-6">Voltar para produtos</Button>
    </View>
  );
};
