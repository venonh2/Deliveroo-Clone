import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";

type Dishie = {
  name: string;
  price: number;
  description: string;
};

type Props = {
  id: string;
  imgUrl: string;
  title: string;
  rating: string;
  genre: string;
  address: string;
  short_description: string;
  dishies: Dishie[];
  lat: number;
  long: number;
};

export function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishies,
  lat,
  long,
}: Props) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        className="h-36 w-36 rounded-sm"
        source={{
          uri: imgUrl,
        }}
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text--lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>. {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
