import create from "zustand";

const useFeaturedCategoriesStore = create((set) => ({
  featuredCategories: [],
  setFeaturedCategories: () => set((state) => state),
}));
