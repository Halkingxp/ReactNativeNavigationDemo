import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, FlatList } from 'react-navigation';

const data = new Array(150).fill(0);

class HomeScreen extends React.Component {
  renderItem = ({ index }) => {
    return (
      <View style={{ height: 50 } } key = {index}>
        <Text style={{ textAlign: 'center' }}>Item {index}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
});

export default createAppContainer(TabNavigator);