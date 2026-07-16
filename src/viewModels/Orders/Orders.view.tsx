import { FC } from "react";
import { useOrdersViewModel } from "./useOrders.viewModel";
import { FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrderItem } from "./components/OrderItem/OrderItem";

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({ orders }) => {
    return (
        <SafeAreaView className="flex-1">
          <FlatList
            contentContainerClassName="px-[16px] pb-[120px]"
            data={orders}
            renderItem={({ item }) => <OrderItem order={item} />}
            keyExtractor={({id}) => `order-${id}`}
          />
        </SafeAreaView>
    )
};
