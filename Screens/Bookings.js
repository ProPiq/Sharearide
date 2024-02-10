import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet, Dimensions, Pressable, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Ms Jane Doe',
        card: '**** **** **** 2192',
        image: require('../assets/visa.jpg')
    },




];


export default class Bookings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (

            <View style={styles.container}>
                <View style={styles.top}>
                    <Pressable onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Ionicons name="ios-chevron-back" size={30} color="#707070" />
                    </Pressable>
                    <View style={styles.label}>
                        <Text>Bookings</Text>
                    </View>
                    <View style={styles.notification}>
                        <Ionicons name="md-notifications-outline" size={20} color="#707070" />
                    </View>
                </View>
                <View style={styles.mid}>
                    <Pressable style={styles.opt}>
                        <Text style={{ color: '#fff' }}>Active</Text>
                    </Pressable>
                    <Pressable style={styles.opt}>
                        <Text style={{ color: '#fff' }}>Cancelled</Text>
                    </Pressable>
                    <Pressable style={styles.opt}>
                        <Text style={{ color: '#fff' }}>Completed</Text>
                    </Pressable>
                </View>
                <View style={styles.bot}>
                    <FlatList
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.bookArea}>
                                    <View style={styles.booking}>
                                        <View style={styles.cardtop}>
                                            <View style={styles.logo}>
                                                <Image style={{ height: 38, width: 38, borderRadius: 19, alignSelf: 'center' }} source={require('../assets/cardart.jpg')} />
                                            </View>
                                            <View style={styles.title}>
                                                <Text style={{ fontSize: 15, color: '#707070' }}>Sharearide Travel & Tours</Text>
                                            </View>
                                            <View style={styles.price}>
                                                {/* <View style={{ height: 27, width: 83, borderRadius: 18, backgroundColor: '#429588', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>P 350.00</Text>
                                                </View> */}
                                            </View>
                                        </View>
                                        <View style={styles.cardmid}>
                                            <View style={styles.departure}>
                                                <Text style={{ fontSize: 12, color: '#707070', }}>Gaborone</Text>
                                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>8:00 AM</Text>
                                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>7 Oct 2023</Text>
                                            </View>
                                            <View style={styles.froTo}>
                                                <View style={{ height: 10, width: 10, borderRadius: 5, borderColor: '#429588', borderWidth: 1 }} />
                                                <View style={{ height: 0, width: 78, borderColor: '#707070', borderWidth: 0.5 }} />
                                                <View style={{ height: 10, width: 10, borderRadius: 5, borderColor: '#FA8072', borderWidth: 1 }} />
                                            </View>
                                            <View style={styles.destination}>
                                                <Text style={{ fontSize: 12, color: '#707070', }}>Francistown</Text>
                                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>5:30 PM</Text>
                                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>7 Oct 2023</Text>
                                            </View>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}

                    //extraData={selectedId}

                    />
                </View>
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
        height: '4.5%',
        width: '90%',

        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    opt: {
        height: '100%',
        width: '28%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#429588'
    },

    bot: {
        height: '90%',
        width: '100%',
       paddingTop: '3%',
     //   backgroundColor: '#c1c1c1'
    },

    bookArea: {
        height: 200,
        alignItems: 'center',
    },

    booking: {
        height: '60%',
        width: '93%',
        borderRadius: 23,
        // padding: '4%',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
            },
            android: {
                elevation: 5
            }
        }),
    },

    cardtop: {
        //backgroundColor: 'green',
        height: '50%',
        width: '100%',
        flexDirection: 'row'
    },

    logo: {
        //  backgroundColor: 'blue',
        height: '100%',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        // backgroundColor: 'red',
        height: '100%',
        width: '50%',
        justifyContent: 'center'
    },

    price: {
        //backgroundColor: 'pink',
        height: '100%',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardmid: {
        //backgroundColor: 'blue',
        height: '50%',
        width: '100%',
        flexDirection: 'row'
    },

    departure: {
        height: '100%',
        width: '30%',
        alignItems: 'flex-end',
        //justifyContent: 'space-between',
        //paddingTop: '2%',
        paddingBottom: '2%',
    },

    froTo: {
        height: '100%',
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    destination: {
        height: '100%',
        width: '30%',
        alignItems: 'flex-start',
        //justifyContent: 'space-between',
        //paddingTop: '2%',
        paddingBottom: '2%',

    },

});