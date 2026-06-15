import { useGetProductDetails } from "../../shared/queries/product/use-get-product-details";

export const useProductViewModel = (productId:number) => {
    const { data: product, isLoading, error } = useGetProductDetails(productId);
    return {
        product,
        isLoading,
        error,
    }
}