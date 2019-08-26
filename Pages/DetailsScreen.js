
import React from "react";
import { View, Button, Text } from "react-native";

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'DetailsScreen',
        headerStyle: {
            backgroundColor: '#14511e',
            height:30,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(props){
        super(props);
        console.log("DetailsScreen ctr");
        console.log(this.props.navigation.getParam("itemId"));
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Go Fade"
                    onPress={() => this.props.navigation.navigate("FadeInView")}
                />
            </View>
        );
    }
}

export default DetailsScreen;