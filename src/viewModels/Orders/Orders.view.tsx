import { FC } from "react";
import { useOrdersViewModel } from "./useOrders.viewModel";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({ orders }) => {
    return (
        <SafeAreaView className="flex-1">
          <FlatList
            data={orders}
            renderItem={({ item }) => <Text>{item.productName}</Text>}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
    )
};
