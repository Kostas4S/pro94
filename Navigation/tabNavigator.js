import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import FactScreen from "../Screens/factsScreen";
import AddFact from "../Screens/addFact";
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "FactScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AddFact") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="Fact" component={FactScreen} />
      <Tab.Screen name="AddFact" component={AddFact} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;