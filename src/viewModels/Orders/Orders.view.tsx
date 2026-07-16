import { FC } from "react";
import { useOrdersViewModel } from "./useOrders.viewModel";
import { FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrderItem } from "./components/OrderItem/OrderItem";
import { EmptyList } from "./components/EmptyList/EmptyList";
import { ListHeader } from "./components/ListHeader/ListHeader";
import { Error } from "./components/Error/Error";
import { Loading } from "./components/Loading/Loading";

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({ orders, error, isLoading }) => {

  if (error) return <Error />;
  if (isLoading) return <Loading/>;
  
    return (
        <SafeAreaView edges={["top"]} className="flex-1">
          <FlatList
            contentContainerClassName="px-[16px] pb-[120px]"
            data={orders}
            renderItem={({ item }) => <OrderItem order={item} />}
            keyExtractor={({id}) => `order-${id}`}
            ListEmptyComponent={<EmptyList />}
            ListHeaderComponent={<ListHeader />}
          />
        </SafeAreaView>
    )
};
