import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MotiView, ScrollView } from "moti";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { CartIcon } from "../../components/CartIcon";
import { DishRow } from "../../components/DishRow";
import { useDishCart } from "../../store/useDishCart";
import { useRestaurant } from "../../store/useRestaurant";
import { Dishie } from "../../types/Dishie";
import { ResourceImage } from "../../types/Image";

type Props = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishies: Dishie[];
  lat: number;
  long: number;
};

type ParamList = {
  Restaurant: Props;
};

type ScreenRouteProp = RouteProp<ParamList, "Restaurant">;

export function RestaurantScreen() {
  const { params } = useRoute<ScreenRouteProp>();
  const navigation = useNavigation();
  const setRestaurant = useRestaurant((state) => state.setRestaurant);
  const cartItems = useDishCart((state) => state.cartItems);

  useEffect(() => {
    setRestaurant({
      _id: params.id,
      address: params.address,
      dishies: params.dishies,
      image: {} as ResourceImage,
      lat: params.lat,
      long: params.long,
      name: params.title,
      rating: params.rating,
      _type: params.genre,
      short_description: params.short_description,
    });
  }, []);

  return (
    <>
      <MotiView
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 1000,
        }}
      >
        <ScrollView>
          <View className="relative">
            <Image
              className="w-full h-56 bg-gray-300 p-4"
              source={{ uri: params.imgUrl }}
            />
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            >
              <ArrowLeftIcon size={20} color="#00ccbb" />
            </TouchableOpacity>
          </View>

          <View className="bg-white">
            <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{params.title}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon color="green" opacity={0.5} size={22} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{params.genre}</Text> .{" "}
                    {params.rating}
                  </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                  <ArrowLeftOnRectangleIcon
                    color="green"
                    opacity={0.4}
                    size={22}
                  />
                  <Text className="text-xs text-gray-500">
                    Nearby . {params.address.slice(0, 26)}...
                  </Text>
                </View>
              </View>

              <Text className="text-gray-500 mt-2 pb-4">
                {params.short_description}
              </Text>
            </View>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color="gray" size={20} opacity={0.5} />
              <Text className="pl-2 flex-1 text-bold font-bold">
                Have a food allergy ?
              </Text>
              <ChevronRightIcon color="#00ccbb" />
            </TouchableOpacity>
          </View>

          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-1">Menu</Text>

            {/* Dishies */}
            {params.dishies.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                //image={dish.image}
                image={params.imgUrl}
              />
            ))}
          </View>
        </ScrollView>
      </MotiView>
      {cartItems.length > 0 && <CartIcon />}
    </>
  );
}
