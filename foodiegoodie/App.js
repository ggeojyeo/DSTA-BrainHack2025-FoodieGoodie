import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './tabs/SignUpScreen';
import LoginScreen from './tabs/LoginScreen';
import Question1 from './tabs/Question1';
import Question2 from './tabs/Question2';
import InventoryTracking from './tabs/InventoryTracking';
import Community from './tabs/Community';
import SelectQuantity from './tabs/SelectQuantity';
import DonationDetails from './tabs/DonationDetails';
import DonationConfirmation from './tabs/DonationConfirmation';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="InventoryTracking" component={InventoryTracking} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="SelectQuantity" component={SelectQuantity} />
        <Stack.Screen name="DonationDetails" component={DonationDetails} />
        <Stack.Screen name="DonationConfirmation" component={DonationConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
