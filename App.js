import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//components
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Business Search", headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="ResultShow"
          component={ResultShowScreen}
          options={{ headerBackTitleVisible: false, title: "Business Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
