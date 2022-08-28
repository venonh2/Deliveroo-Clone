import { ScrollView, Text, View } from "react-native";
import { CategoryCard } from "../CategoryCard";

export function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* category Card */}
      <CategoryCard
        title="fish"
        imgURi="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
      />
      <CategoryCard
        title="fish"
        imgURi="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
      />
      <CategoryCard
        title="fish"
        imgURi="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
      />
      <CategoryCard
        title="fish"
        imgURi="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
      />
      <CategoryCard
        title="fish"
        imgURi="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
      />
    </ScrollView>
  );
}
