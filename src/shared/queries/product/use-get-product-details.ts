import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../../services/product.service";

export const useGetProductDetails = (productId: number) => { 
    const query = useQuery({
        queryKey: ["product-details", productId],
        queryFn: async () => await getProductDetail(productId),
    });

    return query;
}