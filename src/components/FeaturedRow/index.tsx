import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { RestaurantCard } from "../RestarauntCard";

type Props = {
  id: string;
  title: string;
  description: string;
  featuredCategory?: string;
};

export function FeaturedRow({ title, description, featuredCategory }: Props) {
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
        <RestaurantCard
          id="eita eia"
          imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
          title="eita eia"
          rating="5"
          genre="eita eia"
          address="eita eia"
          short_description="eita eia"
          dishies={[
            {
              name: "teste",
              price: 34,
              description: "vish paapi",
            },
          ]}
          lat={25.232332}
          long={25.232332}
        />
        <RestaurantCard
          id="eita eia"
          imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
          title="eita eia"
          rating="5"
          genre="eita eia"
          address="eita eia"
          short_description="eita eia"
          dishies={[
            {
              name: "teste",
              price: 34,
              description: "vish paapi",
            },
          ]}
          lat={25.232332}
          long={25.232332}
        />
        <RestaurantCard
          id="eita eia"
          imgUrl="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
          title="eita eia"
          rating="5"
          genre="eita eia"
          address="eita eia"
          short_description="eita eia"
          dishies={[
            {
              name: "teste",
              price: 34,
              description: "vish paapi",
            },
          ]}
          lat={25.232332}
          long={25.232332}
        />
      </ScrollView>
    </View>
  );
}
