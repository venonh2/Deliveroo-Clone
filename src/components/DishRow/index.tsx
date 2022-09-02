import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";

import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { filterCartItemsById, useDishCart } from "../../store/useDishCart";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export function DishRow(props: Props) {
  const { id, name, description, price, image } = props;
  const [isPressed, setIsPressed] = useState(false);
  const items = useDishCart((state) =>
    filterCartItemsById(id, state.cartItems)
  );
  const { addItem, removeItem } = useDishCart((state) => state);

  const handleAddItemToCart = () => {
    addItem(props);
  };

  const handleRemoveItemFromCart = () => {
    if (items.length <= 0) return;
    removeItem(props);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(true)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#f3f3f4",
            }}
          >
            <Image
              className="h-20 w-20 bg-gray-300 p-4"
              source={{ uri: image }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View>
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={handleRemoveItemFromCart}>
              <MinusCircleIcon
                color={items.length > 0 ? "#00ccbb" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={handleAddItemToCart}>
              <PlusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
