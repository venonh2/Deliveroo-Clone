import create from "zustand";

import { Category } from "../types/Category";

type CategoriesStore = {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
};

export const useCategories = create<CategoriesStore>((set) => ({
  categories: [],
  setCategories: (categories: Category[]) =>
    set((state) => ({ categories: [...state.categories, ...categories] })),
}));
