import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  SpeakerWaveIcon,
} from "react-native-heroicons/solid";
import { FeaturedCategory } from "../../types/FeaturedCategory";
import { Categories } from "../../components/Categories";
import { FeaturedRow } from "../../components/FeaturedRow";
import { sanityService } from "../../http/featuredCategoriesService";

export function Home() {
  const [featuredCategories, setFeaturedCategories] = useState<
    FeaturedCategory[]
  >([]);

  useEffect(() => {
    sanityService
      .fetchFeaturedCategories()
      .then((res) => {
        setFeaturedCategories(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView className="pt-10 bg-white">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{ uri: "https://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliry now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 p-3">
          <SpeakerWaveIcon color="gray" size={20} />
          <TextInput
            testID="search-home-input-id"
            placeholder="Restaurants and cuisineis"
            keyboardType="default"
            maxLength={42}
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>
      {/*body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory={category.name}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
