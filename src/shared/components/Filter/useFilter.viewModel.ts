import { useGetProductCategories } from "../../queries/product/use-get-product-categories";
import { useFilterStore } from "../../store/use-filter-store";

export const useFilterViewModel = () => {
  const {
    data: productCategories,
    isLoading,
  } = useGetProductCategories();

  const { updateFilter, filterState } = useFilterStore();

  const handleValueMaxChange = (value: number) => {
    updateFilter({ key: "valueMax", value: value });
  };

  const handleValueMinChange = (value: number) => {
    updateFilter({ key: "valueMin", value: value });
  };

  const handleCategoryToggle = (categoryId: number) => {
    const categoryAlreadyInArray =
      filterState.selectedCategories.includes(categoryId);

    if (categoryAlreadyInArray) {
      updateFilter({
        key: "selectedCategories",
        value: filterState.selectedCategories.filter((id) => id !== categoryId),
      });
    } else {
      updateFilter({
        key: "selectedCategories",
        value: [...filterState.selectedCategories, categoryId],
      });
    }
  };

  return {
    productCategories,
    isLoading,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToggle,
    selectedCategories: filterState.selectedCategories,
  };
};
