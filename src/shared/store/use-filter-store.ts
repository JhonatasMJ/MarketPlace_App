import { create } from "zustand";

export interface FilterState {
  valueMin: number | null;
  valueMax: number | null;
  selectedCategories: number[];
  searchText: string;
}

interface FilterStore {
  appliedFilters: FilterState;
  filterState: FilterState;
  updateFilter: (props: {
    key: keyof FilterState;
    value: string | number | number[];
  }) => void;
  resetFilters: () => void;
  applyFilters: () => void;
}

const defaultFilterValues = {
  valueMin: null,
  valueMax: null,
  selectedCategories: [],
  searchText: "",
};

export const useFilterStore = create<FilterStore>((set) => ({
  appliedFilters: {
    ...defaultFilterValues,
  },
  filterState: {
    ...defaultFilterValues,
  },
  updateFilter: ({ key, value }) => {
    set((state) => ({
      filterState: {
        ...state.appliedFilters,
        [key]: value,
      },
    }));
  },
  resetFilters: () => {
    set({
      filterState: { ...defaultFilterValues },
      appliedFilters: { ...defaultFilterValues },
    });
  },
  applyFilters: () => {
    set((state) => ({
      appliedFilters: { ...state.filterState },
    }));
  },
}));
    