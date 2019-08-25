// In App.js in a new project


import { createBottomTabNavigator,createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Pages/HomeScreen"
import DetailsScreen from "./Pages/DetailsScreen"
import SettingsScreen from "./Pages/SettingsScreen"
import ProfileScreen from "./Pages/ProfileScreen"
import FadeInView from "./Pages/FadeInView"


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: DetailsScreen,
    FadeInView:FadeInView,
},
    {
        initialRouteName: "Home",
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const SettingsStack = createStackNavigator({
        Settings: SettingsScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: "Settings",
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Home: AppNavigator,
        Settings: SettingsStack,
    }
);
export default createAppContainer(TabNavigator);