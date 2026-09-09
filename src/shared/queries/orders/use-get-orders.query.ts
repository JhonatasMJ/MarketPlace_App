import { useQuery } from "@tanstack/react-query"
import { getOrders } from "@/shared/services/orders.service"

export const useGetOrders = () => {
    const query = useQuery({
        queryKey: ["user-orders"],
        queryFn: getOrders,
        staleTime: 1000 * 60 * 10,
    })

    return query
}