import { useQuery } from "@tanstack/react-query"
import { getCreditCard } from "../../services/credit-card.service"

export const useGetCreditCards = () => {
    const query = useQuery({
        queryKey: ["credit-cards"],
        queryFn: getCreditCard,
        staleTime: 1000 * 60 * 5,
    })

    return query
}