import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { Restaurant } from "../../types/Restaurant";
import { sanityService } from "../../http/featuredCategoriesService";
import { RestaurantCard } from "../RestarauntCard";

type Props = {
  id: string;
  title: string;
  description: string;
  featuredCategory?: string;
};

export function FeaturedRow({
  id,
  title,
  description,
  featuredCategory,
}: Props) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    sanityService
      .fetchFeaturedRowRestaurants(id)
      .then((res) => {
        setRestaurants(res?.restaurants);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        className="pt-4"
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* restaraunt card */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant._type}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishies={restaurant.dishies}
            lat={25.232332}
            long={25.232332}
          />
        ))}
      </ScrollView>
    </View>
  );
}
