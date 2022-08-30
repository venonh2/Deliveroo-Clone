import { useEffect } from "react";
import { ScrollView } from "react-native";
import { categoriesService } from "../../http/categoriesService";
import { CategoryCard } from "../CategoryCard";

import { useCategories } from "../../store/useCategories";

export function Categories() {
  const setCategories = useCategories((state) => state.setCategories);
  const categories = useCategories((state) => state.categories);

  useEffect(() => {
    categoriesService
      .fetchCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

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
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          imgURi="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/0ee9c5082d/dessert-wide.jpg"
        />
      ))}
    </ScrollView>
  );
}
