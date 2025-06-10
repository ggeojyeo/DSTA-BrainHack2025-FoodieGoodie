import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { colours } from './utils/colours';
import { Platform } from 'react-native';

import SignUpScreen from './tabs/SignUpScreen';
import LoginScreen from './tabs/LoginScreen';
import Question1 from './tabs/Question1';
import Question2 from './tabs/Question2';
import InventoryTracking from './tabs/InventoryTracking';
import Community from './tabs/Community';
import SelectQuantity from './tabs/SelectQuantity';
import DonationDetails from './tabs/DonationDetails';
import HomeScreen from './tabs/HomeScreen';
import DonationConfirmation from './tabs/DonationConfirmation';
import CommunityScreen from './tabs/CommunityScreen';
import ProfileScreen from './tabs/ProfileScreen';
import SettingsScreen from './tabs/SettingsScreen';
import SelectedStoreScreen from './tabs/selectedStoreScreen';
import { StoreProvider } from './context/StoreContext';
import { ItemProvider } from './context/ItemContext';
import HomeStoreCard from './components/HomeStoreCard';
import SelectedStoreCard from './components/SelectedStoreCard';
import OtherBrandsScreen from './tabs/OtherBrandsScreen';
import OtherStoresScreen from './tabs/OtherStoresScreen';
import HomeStoreCommunityProfileScreen from './tabs/HomeStoreCommunityProfileScreen';

// Home screen not ready yet, temporarily use Community as a placeholder
// const HomeScreen = Community;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs for main app
function MainTabs() {
    return (
        <Tab.Navigator
            initialRouteName="InventoryTracking"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home-outline';
                            break;
                        case 'Community':
                            iconName = 'people-outline';
                            break;
                        case 'InventoryTracking':
                            iconName = 'person-outline';
                            break;
                    }

                    if (focused) {
                        return (
                            <View style={{
                                backgroundColor: colours.darkPurple,
                                width: 40,
                                height: 40,
                                borderRadius: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Ionicons name={iconName} size={24} color="white" />
                            </View>
                        );
                    }

                    return <Ionicons name={iconName} size={24} color={colours.darkPurple} />;
                },

                tabBarActiveTintColor: colours.darkPurple,
                tabBarInactiveTintColor: colours.darkPurple,
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    borderColor: '#eee',
                    height: 75,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                tabBarLabelStyle: {
                    marginTop: 6,
                    fontSize: 12,
                    fontWeight: '500',
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Community" component={Community} />
            <Tab.Screen
                name="InventoryTracking"
                component={InventoryTracking}
                initialParams={{ hasData: false }}
                options={{ tabBarLabel: 'Profile' }} // Rename tab label
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
    <StoreProvider>
      <ItemProvider>
            <NavigationContainer>
                <StatusBar style="auto" />
                <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
                    {/* Onboarding Flow */}
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Question1" component={Question1} />
                    <Stack.Screen name="Question2" component={Question2} />
    
                {/* Tab Navigation */}
                <Stack.Screen name="MainTabs" component={MainTabs} />

                {/* Detail Screens */}
                <Stack.Screen name="SelectQuantity" component={SelectQuantity} />
                <Stack.Screen name="DonationDetails" component={DonationDetails} />
                <Stack.Screen name="DonationConfirmation" component={DonationConfirmation} />
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