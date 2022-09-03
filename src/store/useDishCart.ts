import create from "zustand";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

type DishCartStore = {
  cartItems: Props[];
  addItem: (item: Props) => void;
  removeItem: (item: Props) => void;
};

export const useDishCart = create<DishCartStore>((set) => ({
  cartItems: [],
  addItem: (item: Props) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeItem: (item: Props) =>
    set((state) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => item.id === cartItem.id
      );
      const newArray = [...state.cartItems];
      if (itemIndex !== -1) {
        newArray.splice(itemIndex, 1);
      }
      const newState = { ...state, cartItems: newArray };
      return newState;
    }),
}));

//#region helpers
export function countCartTotal(items: Props[]) {
  return items.reduce((total, item) => ({ total: total.total + item.price }), {
    total: 0,
  });
}

export function filterCartItemsById(id: string, items: Props[]) {
  return items.filter((dishie) => dishie.id === id);
}

export function groupItemsById(items: Props[]) {
  return items.reduce<{ [key: string]: Props[] }>((group, item) => {
    const { id } = item;
    group[id] = group[id] ?? [];
    group[id].push(item);
    return group;
  }, {});
}
//#endregion helpers
