import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { Dishie } from "../../types/Dishie";

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

export function RestaurantCard(props: Props) {
  const {
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
  } = props;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", props)}
      className="bg-white mr-3 shadow"
    >
      <Image
        className="h-36 w-36 rounded-sm"
        source={{
          uri: imgUrl,
        }}
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>. {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">
            Nearby . {address.slice(0, 6)}...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
