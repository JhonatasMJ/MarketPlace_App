import { useGetProductCategories } from "../../../../shared/queries/product/use-get-product-categories";
import { useBottomSheetStore } from "../../../../shared/store/bottomSheet-store";
import { useFilterStore } from "../../../../shared/store/use-filter-store";

export const useFilterViewModel = () => {
  const {
    data: productCategories,
    isLoading,
  } = useGetProductCategories();

  const { updateFilter, filterState, applyFilters, resetFilters } = useFilterStore();
  const {close} = useBottomSheetStore();

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

  const handleApplyFilters = () => {
    applyFilters();
    close();
  };

  const handleResetFilters = () => {
      close();
    resetFilters();
  };


  return {
    productCategories,
    isLoading,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToggle,
    selectedCategories: filterState.selectedCategories,
    handleApplyFilters,
    handleResetFilters,
  };
};
