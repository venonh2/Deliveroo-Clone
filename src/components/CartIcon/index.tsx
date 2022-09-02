import { Text } from "moti";
import { TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";

import { View } from "react-native";
import { countCartTotal, useDishCart } from "../../store/useDishCart";
import { useNavigation } from "@react-navigation/native";

export function CartIcon() {
  const navigation = useNavigation();
  const { total: cartTotal } = useDishCart((state) =>
    countCartTotal(state.cartItems)
  );

  return (
    <View className="absolute bottom-10 w-full z-50">
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
    </View>
  );
}
