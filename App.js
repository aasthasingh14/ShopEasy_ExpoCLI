import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import ShopDetailScreens from './screens/ShopDetailsScreen';
import ShopScreen from './screens/ShopScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ShopNow'>
        <Stack.Screen name="ShopNow" component={ShopScreen}/>
        <Stack.Screen name="DetailOfProduct" component={ShopDetailScreens}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
