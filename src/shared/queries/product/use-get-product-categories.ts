import { useQuery } from "@tanstack/react-query";
import { getProductsCategories } from "../../services/product.service";

export const useGetProductCategories = () => { 
    const query = useQuery({
        queryKey: ["product-categories"],
        queryFn: getProductsCategories,
        staleTime: 1000 * 60 * 60, // 60 minutos
    });

    return query;
}