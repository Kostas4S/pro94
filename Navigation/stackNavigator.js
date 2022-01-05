import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import Description from "../Screens/description";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
};

export default StackNavigator;