import React from "react";
import { View, Button, Text } from "react-native";

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", backgroundColor: "#432213", }}>
                <Text>SettingsScreen Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

export default SettingsScreen;