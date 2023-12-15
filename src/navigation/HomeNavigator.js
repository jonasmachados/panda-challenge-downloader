import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import VideoScreen from "../screens/VideoScreen";
import { Foundation } from "@expo/vector-icons";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: ConstantsToStyle.PRIMARY_COLOR,
        },
        headerTintColor: ConstantsToStyle.BACKGROUND_COLOR,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerStyle: {
          backgroundColor: ConstantsToStyle.PRIMARY_COLOR,
        },
        drawerActiveBackgroundColor: ConstantsToStyle.TEXT_COLOR,
        drawerInactiveBackgroundColor: ConstantsToStyle.SECONDARY_COLOR,
        drawerLabelStyle: {
          color: ConstantsToStyle.BACKGROUND_COLOR,
          fontSize: 18,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Homepage",
          drawerLabel: "Homepage",
          drawerIcon: () => (
            <Foundation
              name="home"
              size={30}
              color={ConstantsToStyle.BACKGROUND_COLOR}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Video"
        component={VideoScreen}
        options={{
          title: "Detalhes do Vídeo",
          drawerLabel: "Detalhes do Vídeo",
          drawerIcon: () => (
            <Foundation
              name="comment-video"
              size={30}
              color={ConstantsToStyle.BACKGROUND_COLOR}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
