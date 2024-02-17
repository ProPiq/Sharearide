import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Share, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
    {
        id: '1',
        title: 'Privacy Policy',
    },
    {
        id: '2',
        title: 'Terms & Conditions',
    },
    {
        id: '3',
        title: 'FAQ & Support',
    },
    {
        id: '4',
        title: 'About',
    },
    {
        id: '6',
        title: 'Share',
    },
    {
        id: '7',
        title: 'Notifications',
    },


];

const separator = () => {
    return (
        <View style={{ borderBottomWidth: 0.3, width: '85%', alignSelf: 'center', borderColor: "#c1c1c1" }} />
    )
};


export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    onClick(i) {
        if (i == 0) {
            Linking.openURL('https://web.dev.sharearide.co.bw/privacy_policy');
        }
        if (i == 1) {
            Linking.openURL('https://web.dev.sharearide.co.bw/terms_conditions');
        }
        if (i == 2) {
            this.props.navigation.navigate('Faq')
        }
        if (i == 3) {
            this.props.navigation.navigate('About')
        }
        if (i == 4) {
            this.onShare()
        }
        if (i == 5) {
            this.props.navigation.navigate('Notifications')
        }
    }

    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Sharearide is a revolutionary mobile application designed to simplify and streamline the process of booking buses. *Link to app store goes here*',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.back}>
                        <Ionicons name="ios-chevron-back" size={30} color="#707070" />
                    </View>
                    <View style={styles.label}>
                        <Text>Settings</Text>
                    </View>
                    <View style={styles.notification}>
                        <Ionicons name="md-notifications-outline" size={20} color="#707070" />
                    </View>
                </View>
                <SafeAreaView style={styles.mid}>
                    <FlatList
                        style={{ height: '100%' }}
                        ItemSeparatorComponent={separator}
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => this.onClick(index)} style={styles.flatItem}>
                                    <View style={styles.item}>
                                        <Text style={{ fontSize: 16 }}>{item.title}</Text>
                                    </View>
                                    <View style={styles.icon}>
                                        <MaterialIcons name={'keyboard-arrow-right'} size={25} color="#707070" />
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </SafeAreaView>
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
        marginTop: '8%'
    },

    top: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    back: {
        height: '100%',
        width: '25%',
        justifyContent: 'center',
        paddingLeft: '5%',
        // backgroundColor: 'blue',
    },

    label: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },

    notification: {
        height: '100%',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
    },

    mid: {
        height: '90%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    flatItem: {
        height: 45,
        width: 330,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    item: {
        height: '100%',
        width: '60%',
        justifyContent: 'center',
    },

    icon: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});