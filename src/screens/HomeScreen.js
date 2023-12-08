import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeFlimScreen from "./Flims/HomeFlimScreen";

const Tab = createMaterialTopTabNavigator;

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeFlims"
        component={HomeFlimScreen}
        options={{
          title: "Films",
        }}
      />
      {/* <Tab.Screen
        name="HomeSeries"
        component={HomeSeriescreen}
        options={{
          title: "Séries",
        }}
      /> */}
    </Tab.Navigator>
  );
}
