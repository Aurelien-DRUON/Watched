import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function SeriesNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeFlims"
        component={HomeFlimScreen}
        options={{
          title: "Films",
        }}
      />
      <Tab.Screen
        name="Series"
        component={Stats}
        options={{
          title: "Séries",
        }}
      />
    </Tab.Navigator>
  );
}
