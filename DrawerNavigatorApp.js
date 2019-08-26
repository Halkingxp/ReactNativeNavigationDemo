import React from "react";
import {TouchableOpacity,Text,View} from "react-native";

import { createDrawerNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
        </View>
      );
    }
  }
  
  class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>
        </View>
      );
    }
  }
  
  const DrawerNavigator = createDrawerNavigator(
    {
      Home: HomeScreen,
      Settings: SettingsScreen,
    },
    {
      hideStatusBar: true,
      drawerWidth:100,
      drawerBackgroundColor: 'rgba(255,255,255,.9)',
      overlayColor: 'cyan',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
      },
    }
  );
  
  export default createAppContainer(DrawerNavigator);