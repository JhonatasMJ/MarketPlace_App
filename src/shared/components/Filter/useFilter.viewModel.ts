import { useGetProductCategories } from "../../queries/product/use-get-product-categories";

export const useFilterViewModel = () => {

    const {data: productCategories, isLoading, error, refetch} = useGetProductCategories();

    return {
       productCategories,
       isLoading,
    }
}