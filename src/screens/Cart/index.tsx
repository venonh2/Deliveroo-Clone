import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import Currency from "react-currency-formatter";

import { MinusCircleIcon, XCircleIcon } from "react-native-heroicons/solid";
import {
  countCartTotal,
  groupItemsById,
  useDishCart,
} from "../../store/useDishCart";
import { useRestaurant } from "../../store/useRestaurant";

export function Cart() {
  const navigation = useNavigation();
  const restaurant = useRestaurant((state) => state.restaurant);
  const cartItems = useDishCart((state) => groupItemsById(state.cartItems));
  const removeItem = useDishCart((state) => state.removeItem);
  const { total: cartTotal } = useDishCart((state) =>
    countCartTotal(state.cartItems)
  );

  const handleRemoveItemFromCart = (props: any) => {
    removeItem(props);
  };

  return (
    <SafeAreaView className="pt-10 flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Cart</Text>
            <Text className="text-center text-gray-400">{restaurant.name}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-3 right-5 bg-gray-100 rounded-full"
          >
            <XCircleIcon size={50} color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            className="h-7 w-7 bg-gra-300 p-4 rounded-full"
            source={{
              uri: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            }}
          />
          <Text className="text-[#00ccbb]">Delivery in 35 - 40 min</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-[#00ccbb]">Cart</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(cartItems).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00ccbb]">{items.length} x</Text>
              <Image
                className="h-7 w-7 bg-gra-300 p-4 rounded-full"
                source={{
                  uri: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                }}
              />
              <Text className="flex-1">{items[0]?.name} </Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="USD" />
              </Text>

              <TouchableOpacity
                onPress={() => handleRemoveItemFromCart(items[0])}
              >
                <Text className="text-[#00ccbb] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={cartTotal} currency="USD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="font-bold">Delivery Fee</Text>
            <Text className="font-bold">
              <Currency quantity={4.33} currency="USD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="font-bold">Order Total</Text>
            <Text className="font-bold">
              <Currency quantity={cartTotal + 4.33} currency="USD" />
            </Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4">
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
