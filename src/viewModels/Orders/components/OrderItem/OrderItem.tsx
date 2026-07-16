import { Image, Text, View } from "react-native";
import { OrderInterface } from "../../../../shared/interfaces/order";
import { buildImageUrl } from "../../../../shared/helpers/buildImageUrl";
import { format } from "date-fns";
import { PriceText } from "../../../../shared/components/PriceText";

interface OrderItemProps {
  order: OrderInterface;
}

export const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <View className="flex-row items-center bg-white p-3 pl-0 mb-3 rounded-lg h-[89px]">
      <View className="p-1">
        <Image
          className="w-[88px] h-[88px] rounded-lg mr-4"
          source={{ uri: buildImageUrl(order.productPhoto) }}
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 justify-between py-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text
            className="text-base font-semibold text-gray-900 flex-1 mr-2"
            numberOfLines={1}
          >
            {order.productName}
          </Text>
          <Text className="text-sm text-gray-600">
            {format(order.createdAt, "dd/MM/yyyy")}
          </Text>
        </View>
        <View className="flex-row">
          <Text className="text-sm text-gray-600 mb-1"></Text>
          {order.quantity} {order.quantity > 1 ? "Unidades" : "Unidade"} •{" "}
          <PriceText
            classNameCurrency="text-sm text-gray-600"
            classNameValue="text-sm text-gray-600"
            value={order.totalPrice}
          />
        </View>
        <Text className="text-sm text-gray-600">
          Cartão final {order.creditCard.maskedNumber.slice(-4)}
        </Text>
      </View>
    </View>
  );
};
