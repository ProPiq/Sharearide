import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions, Button} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    render() {
        return (


            <View style={styles.container}>
                <Text>This is the login screen</Text>  
                <Button onPress={() => this.props.navigation.navigate('Register')} title="Sign in here" />   
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        height: windowHeight,
        width: windowWidth,
    },
});