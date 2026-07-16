import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../../styles/colors";
import { Button } from "../../../../shared/components/Button/Button";
import { router } from "expo-router";

export const EmptyListCart = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center px-16 pt-16">
        <Ionicons name="cart-outline" size={80} color={colors.gray["200"]} />
        <Text className="text-xl font-bold text-gray-700 m-4">
          Seu carrinho está vazio
        </Text>
        <Text className=" font-base text-gray-400 m-4 text-center">
          Explore o catálogo de produtos e faça sua primeira compra
        </Text>
      </View>
      <Button
      onPress={() => router.push("/home")}
        className="w-[197px] self-center"
        variant="outlined"
        leftIcon="storefront-outline"
      >
        Explorar produtos
      </Button>
    </SafeAreaView>
  );
};
