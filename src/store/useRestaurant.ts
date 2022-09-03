import create from "zustand";

import { Restaurant } from "../types/Restaurant";

type RestaurantStore = {
  restaurant: Restaurant;
  setRestaurant: (restaurant: Restaurant) => void;
};

export const useRestaurant = create<RestaurantStore>((set) => ({
  restaurant: {} as Restaurant,
  setRestaurant: (restaurant: Restaurant) =>
    set((state) => ({ restaurant: restaurant })),
}));
