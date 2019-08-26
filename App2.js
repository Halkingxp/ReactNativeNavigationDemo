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
import ScrollTabView from "./Pages/ScrollTabView"

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Details: DetailsScreen,
    FadeInView:FadeInView,
    ScrollTabView:ScrollTabView,
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
            headerTransparent:true,
            // cardShadowEnabled:false,
        },
        cardShadowEnabled:false,
        headerTransparent:true,
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
        cardShadowEnabled:false,
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
        // Home1: AppNavigator,
        // Settings1: SettingsStack,
        // Switch1:AppSwitchNavigator,
        // Home2: AppNavigator,
        // Settings2: SettingsStack,
        // Switch2:AppSwitchNavigator,
    },
    {
        defaultNavigationOptions:({navigation})=>({
            tabBarIcon:({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName.indexOf('Home') > -1  ) {
                  iconName = `exclamationcircle${focused ? '' : 'o'}`;
                  // Sometimes we want to add badges to some icons. 
                  // You can check the implementation below.
                  IconComponent = HomeIconWithBadge; 
                } else if (routeName.indexOf('Settings') > -1) {
                  iconName = `setting`;
                }
                else if (routeName.indexOf('Switch') > -1) {
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
        swipeEnabled:true,
        width:2000,
    }
);


export default createAppContainer(TabNavigator);