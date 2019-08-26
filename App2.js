// In App.js in a new project

import React from "react";
import { createSwitchNavigator,createBottomTabNavigator,createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Pages/HomeScreen"
import DetailsScreen from "./Pages/DetailsScreen"
import SettingsScreen from "./Pages/SettingsScreen"
import ProfileScreen from "./Pages/ProfileScreen"
import FadeInView from "./Pages/FadeInView"

import Ionicons from "react-native-vector-icons/AntDesign"
import HomeIconWithBadge from "./Tools/HomeIconWithBadge"

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
        mode: 'modal',
        headerMode: 'none',
    }
);


const AppSwitchNavigator = createSwitchNavigator({
    /* 
     * Rather than being rendered by a screen component, the
     * AuthenticationNavigator is a screen component
     */
    Details: DetailsScreen,
    FadeInView:FadeInView,
  });

const TabNavigator = createBottomTabNavigator(
    {
        Home: AppNavigator,
        Settings: SettingsStack,
        Switch:AppSwitchNavigator,
    },
    {
        defaultNavigationOptions:({navigation})=>({
            tabBarIcon:({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                  iconName = `exclamationcircle${focused ? '' : 'o'}`;
                  // Sometimes we want to add badges to some icons. 
                  // You can check the implementation below.
                  IconComponent = HomeIconWithBadge; 
                } else if (routeName === 'Settings') {
                  iconName = `setting`;
                }
                else if (routeName === 'Switch') {
                    iconName = `windowso`;
                  }
                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
              },
        }),
        tabBarOptions:{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);


export default createAppContainer(TabNavigator);