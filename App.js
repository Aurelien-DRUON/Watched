import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigation from "./src/screens/TabsNavigation";
import DetailsFlimScreen from "./src/screens/Flims/DetailsFlimScreen";
import DetailsSeriesScreen from "./src/screens/Series/DetailsSeriesScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{ title: "Watched" }}
        />
        <Stack.Screen
          name="DetailsFlim"
          component={DetailsFlimScreen}
          options={{ title: "Watched" }}
        />
        <Stack.Screen
          name="DetailsSeries"
          component={DetailsSeriesScreen}
          options={{ title: "Watched" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
