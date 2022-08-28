import { Image, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  imgURi: string;
};
export function CategoryCard({ title, imgURi }: Props) {
  return (
    <TouchableOpacity
      rippleColor="red"
      style={{
        marginRight: 8,
        position: "relative",
        borderRadius: 4,
      }}
    >
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: imgURi,
        }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
