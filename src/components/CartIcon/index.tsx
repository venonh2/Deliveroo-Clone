import React from "react";
import { MotiView } from "moti";
import { TouchableOpacity, Text } from "react-native";
import Currency from "react-currency-formatter";

import { countCartTotal, useDishCart } from "../../store/useDishCart";
import { useNavigation } from "@react-navigation/native";

export function CartIcon() {
  const navigation = useNavigation();
  const { total: cartTotal } = useDishCart((state) =>
    countCartTotal(state.cartItems)
  );
  const cartItems = useDishCart((state) => state.cartItems);

  return (
    <MotiView
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 600,
      }}
      className="absolute bottom-10 w-full z-50"
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {cartTotal}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Cart
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={cartTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </MotiView>
  );
}
