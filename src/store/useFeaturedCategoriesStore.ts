import create from "zustand";
import { FeaturedCategory } from "../types/FeaturedCategory";

type FeaturedCategoryStore = {
  featuredCategories: FeaturedCategory[];
  setFeaturedCategory: (featuredCategories: FeaturedCategory[]) => void;
};

export const useFeaturedCategoriesStore = create<FeaturedCategoryStore>(
  (set) => ({
    featuredCategories: [],
    setFeaturedCategory: (featuredCategories) =>
      set((state) => ({
        featuredCategories: [
          ...state.featuredCategories,
          ...featuredCategories,
        ],
      })),
  })
);
