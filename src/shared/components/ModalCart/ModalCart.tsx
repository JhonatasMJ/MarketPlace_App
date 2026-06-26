import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../../styles/colors";
import { Button } from "../Button/Button";

interface ModalCartParams {
  productName: string;
  onGoToCart: () => void;
  onClose: () => void;
  onContinueShopping: () => void;
}

export const ModalCart = ({
  productName,
  onGoToCart,
  onClose,
  onContinueShopping,
}: ModalCartParams) => {
  return (
    <View className="w-full max-w-sm bg-white rounded-xl p-6">
      <View className="items-center mb-4">
        <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-3">
          <Ionicons name="checkmark" size={32} color={colors.success} />
        </View>
        <Text className="text-lg font-bold text-gray-900 text-center">Producto adicionado!</Text>
      </View>
      <Text className="text-gray-600 text-center mb-6">
        <Text className="font-semibold">{productName}</Text>
         Foi adicionado ao seu carrinho com sucesso!
      </Text>
      <View className="gap-3">
        <Button onPress={onGoToCart} leftIcon="cart" >
            Ver Carrinho
        </Button>
        <Button variant="outlined" onPress={onContinueShopping}>
            Continuar Comprando
        </Button>

      </View>
    </View>
  );
};
