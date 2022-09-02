import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Restaurant } from "../screens/Restaurant";
import { Cart } from "../screens/Cart";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
