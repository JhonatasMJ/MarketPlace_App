import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../../../styles/colors";
import { Button } from "../../../../shared/components/Button/Button";
import { router } from "expo-router";

export const EmptyList = () => {
  return (
    <View className="flex-1 items-center px-20 pt-16">
      <Ionicons name="clipboard-outline" size={80} color={colors.gray[200]} />
      <Text className="text-xl font-bold text-gray-700 my-4 text-center">
        Você ainda não realizou nenhum pedido
      </Text>
      <Text className="text-gray-400 text-center text-base mb-8">
        Explore o catálogo de produtos e faça sua primeira compra
      </Text>
      <Button
        variant="outlined"
        onPress={() => router.push("/home")}
        leftIcon="storefront-outline"
      >
        Explorar Produtos
      </Button>
    </View>
  );
};
