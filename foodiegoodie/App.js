import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './tabs/SignUpScreen';
import LoginScreen from './tabs/LoginScreen';
import Question1 from './tabs/Question1';
import Question2 from './tabs/Question2';
import Question3 from './tabs/Question3';
import HomeScreen from './tabs/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import CommunityScreen from './tabs/CommunityScreen';
import ProfileScreen from './tabs/ProfileScreen';
import SettingsScreen from './tabs/SettingsScreen';
import SelectedStoreScreen from './tabs/SelectedStoreScreen';
import { StoreProvider } from './context/StoreContext';
import { ItemProvider } from './context/ItemContext';
import HomeStoreCard from './components/HomeStoreCard';
import SelectedStoreCard from './components/SelectedStoreCard';
import OtherBrandsScreen from './tabs/OtherBrandsScreen';
import OtherStoresScreen from './tabs/OtherStoresScreen';
import HomeStoreCommunityProfileScreen from './tabs/HomeStoreCommunityProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoreProvider>
      <ItemProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Question1" component={Question1} />
            <Stack.Screen name="Question2" component={Question2} />
            <Stack.Screen name="Question3" component={Question3} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="SelectedStoreScreen" component={SelectedStoreScreen} />
            <Stack.Screen name="OtherBrandsScreen" component={OtherBrandsScreen} />
            <Stack.Screen name="OtherStoresScreen" component={OtherStoresScreen} />
            <Stack.Screen name="HomeStoreCommunityProfileScreen" component={HomeStoreCommunityProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ItemProvider>
    </StoreProvider>
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
