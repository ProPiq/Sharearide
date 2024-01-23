import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, Image } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Profile extends React.Component {

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
                        <Text>Ticket</Text>
                    </View>
                    <View style={styles.notification}>
                        <Ionicons name="md-notifications-outline" size={20} color="#707070" />
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={styles.ticket}>
                        <View style={styles.tic1}>
                            <View style={styles.price}>
                                <Text style={{ fontSize: 20, color: '#707070' }}>P 350.50</Text>
                            </View>
                            <View style={styles.icons}>
                                <View style={{ height: 34, width: 34, borderRadius: 17, backgroundColor: '#429588', alignItems: 'center', justifyContent: 'center' }}>
                                    <Ionicons name="print" size={20} color={'#fff'} />
                                </View>
                                <View style={{ height: 34, width: 34, borderRadius: 17, backgroundColor: '#429588', alignItems: 'center', justifyContent: 'center' }}>
                                    <MaterialIcons name="file-download" size={20} color={'#fff'} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.tic2}>
                            <View style={styles.departure}>
                                <Text style={{ fontSize: 12, color: '#707070', }}>Gaborone</Text>
                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>8:00 AM</Text>
                            </View>
                            <View style={styles.froTo}>
                                <View style={{ height: 10, width: 10, borderRadius: 5, borderColor: '#429588', borderWidth: 1 }} />
                                <View style={{ height: 0, width: 78, borderColor: '#707070', borderWidth: 0.5 }} />
                                <View style={{ height: 10, width: 10, borderRadius: 5, borderColor: '#FA8072', borderWidth: 1 }} />
                            </View>
                            <View style={styles.destination}>
                                <Text style={{ fontSize: 12, color: '#707070', }}>Francistown</Text>
                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>5:30 PM</Text>
                            </View>
                        </View>
                        <View style={styles.tic3}>
                            <View style={styles.date}>
                                <Text style={{ fontSize: 12, color: '#707070', }}>Date</Text>
                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>10 Oct 2023</Text>
                            </View>
                            <View style={styles.seat}>
                                <View style={{ height: '60%', width: '65%', borderRadius: 12, backgroundColor: '#429588', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, color: '#fff', fontWeight: 'bold' }}>Seat A1,A2,B1</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tic4}>
                            <View style={styles.passenger}>
                                <Text style={{ fontSize: 12, color: '#707070', }}>Passenger</Text>
                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>Jon Dough</Text>
                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>Jane Dough</Text>
                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>Jack Dough</Text>
                            </View>
                            <View style={styles.ticID}>
                                <Text style={{ fontSize: 12, color: '#707070', }}>Ticket ID</Text>
                                <Text style={{ fontSize: 12, color: '#707070', fontWeight: 'bold' }}>132 124 456</Text>
                            </View>

                        </View>
                        <View style={styles.ticBot}>
                            <Image style={{ height: '80%', width: '60%' }} source={require('../assets/barcode.png')} />
                        </View>
                    </View>

                </View>
                <View style={styles.bot}>
                    <View style={styles.but}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>Continue</Text>
                    </View>
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
        height: '80%',
        width: '100%',
        alignItems: 'center',
       // backgroundColor: 'pink',
    },

    ticket: {
        height: '70%',
        width: '85%',
        padding: '3%',
        alignItems: 'center',
        borderRadius: 30,
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

    tic1: {
        height: '15%',
        width: '90%',
        flexDirection: 'row'
    },

    price: {
        height: '100%',
        width: '60%',
        justifyContent: 'center',

    },

    icons: {
        height: '100%',
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    tic2: {
        height: '15%',
        width: '90%',
        flexDirection: 'row'
    },

    departure: {
        height: '100%',
        width: '30%',
        justifyContent: 'space-between',
        paddingTop: '2%',
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
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: '2%',
        paddingBottom: '2%',

    },

    tic3: {
        height: '15%',
        width: '90%',
        flexDirection: 'row'
    },

    date: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        paddingTop: '2%',
        paddingBottom: '2%',
    },

    seat: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: '2%',
        paddingBottom: '2%',
    },

    tic4: {
        height: '20%',
        width: '90%',
        flexDirection: 'row'
    },

    passenger: {
        height: '100%',
        width: '50%',
        //justifyContent: 'center',
        paddingTop: '2%',
        paddingBottom: '2%',
    },

    ticID: {
        height: '100%',
        width: '50%',
        //justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: '2%',
        paddingBottom: '2%',
    },

    ticBot: {
        height: '35%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    barcode: {
        height: '100%',
        width: '50%'
    },

    bot: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    but: {
        height: 43,
        width: 286,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#429588'
    }




});