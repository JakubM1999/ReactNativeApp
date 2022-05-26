import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import CostcentersScreen from "./src/screens/CostcentersScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Costcenters">

        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        />

        <Stack.Screen 
        name="List" 
        component={ListScreen} 
        />

        <Stack.Screen 
        name="Components" 
        component={ComponentsScreen}
        />

        <Stack.Screen 
        name="Costcenters" 
        component={CostcentersScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}






// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Components: ComponentsScreen,
//     List: ListScreen,
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "App",
//     },
//   }
// );

// export default createAppContainer(navigator);
