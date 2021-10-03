import React from "react";
import "react-native-gesture-handler";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Icon,
  IconRegistry,
  Layout,
  Text,
  useTheme,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Video from "./screens/Video";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
const Main = () => {
  const theme = useTheme();
  // theme["text-basic-color"]
  // theme['background-basic-color-1']
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTintColor: theme["text-basic-color"],
          headerStyle: {
            backgroundColor: theme["background-basic-color-2"],
          },
          headerRight: () => (
            <Icon
              style={{
                width: 32,
                height: 32,
                backgroundColor: theme["background-basic-color-1"],
                borderRadius: 50,
                marginRight: 20,
              }}
              fill={"#ccc"}
              name="person"
            />
          ),
        }}
      >
        <Screen name="Video" component={Video} />
      </Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva["light"]}>
      <StatusBar style="inverted" />
      <Main />
    </ApplicationProvider>
  </>
);
