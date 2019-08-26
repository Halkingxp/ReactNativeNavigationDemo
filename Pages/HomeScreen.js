
import React from "react";
import { View, Button, Text ,StyleSheet} from "react-native";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#E0EEEE',
            // height:30,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <View style = {{flexDirection:"row"}}>
                <Button style = {{marginRight:10}}
                    onPress={() => alert('This is a button!')}
                    title="Info1"
                    color="#000"
                />
                <Button style = {{margin:10}}
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#000"
                />
            </View>

        ),
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", backgroundColor: "#fff8dc",marginTop:50, }}>
                <Text>Home Screen</Text>
                <Button style = {styles.button}
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details',{itemId:"aaa"})}
                />
                <Button style={styles.button}
                    title="Go to FadeInView"
                    onPress={() => this.props.navigation.navigate('FadeInView', { itemId: "aaa" })}
                />
                <Button style={styles.button}
                    title="ScrollTabView"
                    onPress={() => this.props.navigation.navigate('ScrollTabView', { itemId: "aaa" })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 0
    },
    button: {
      marginBottom:10,
      padding: 20,
      fontSize: 14,
      backgroundColor: '#fff8dc',
    },

  })

export default HomeScreen;