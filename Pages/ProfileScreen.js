import React from "react";
import { View, Button, Text } from "react-native";

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", backgroundColor: "#432213", }}>
                <Text>ProfileScreen Screen</Text>
                <Button
                    title="Go to SettingsScreen"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
            </View>
        );
    }
}

export default ProfileScreen;