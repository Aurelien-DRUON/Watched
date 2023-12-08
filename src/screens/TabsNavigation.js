import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Accueil",
          headerShown: false,
          tabBarIcon: () => <Icon name="home" size={24} />,
        }}
      />
      {/* <Tab.Screen
        name="Later"
        component={LaterFlimScreen}
        options={{
          title: "À voir",
          headerShown: false,
          tabBarIcon: () => <Icon name="clock" size={24} />,
        }}
      />
      <Tab.Screen
        name="Seen"
        component={SeenFlimScreen}
        options={{
          title: "Vus",
          headerShown: false,
          tabBarIcon: () => <Icon name="check-square" size={24} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
