import React, { Component, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TextInput, Pressable, } from "react-native";
import { CheckBox } from '@rneui/themed';
import Swiper from 'react-native-swiper'
import { Ionicons } from '@expo/vector-icons';
import { OtpInput } from "react-native-otp-entry";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class Register extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            dbc2: '#fff',
            dbc3: '#fff',
            idx: 0,
            check: false,
            opacity: 0.5,
            disabled: true,
            cntn: 'flex',
            focus2: false
        }
    }



    checked() {
        if (this.state.check == false) {
            this.setState({ check: true, opacity: 1, disabled: false })
        }
        else {
            this.setState({ check: false, opacity: 0.5, disabled: true })
        }
    }

    press() {
        console.warn('continue button is pressed')
    }

    onSwipe() {

        this.refs.otp.scrollBy(1)
        this.setState({ cntn: 'none' })


    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.back}>
                        <Ionicons onPress={() => this.props.navigation.navigate('Login')} name="ios-chevron-back" size={40} color="#707070" />
                    </View>
                    <View style={styles.logoCon}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                    </View>
                </View>
                <View style={{ height: 500, }}>
                    <Swiper

                        showsButtons={false}
                        loop={false}
                        index={this.state.idx}
                        showsPagination={false}
                        scrollEnabled={true}
                        ref="swiper"
                    >
                        {/* Slide1 */}
                        <View >
                            <View style={styles.midtxt}>
                                <Text style={{ fontSize: 26, fontWeight: '400', color: '#707070' }}>Please enter your names</Text>
                            </View>

                            <View style={styles.midfld}>
                                <TextInput
                                    placeholder='Firstname' fontSize={18}
                                    style={styles.txtfld}
                                />
                                <TextInput
                                    placeholder='Lastname' fontSize={18}
                                    style={styles.txtfld2}
                                />
                                <TextInput
                                    placeholder='Gender' fontSize={18}
                                    style={styles.txtfld3}
                                />
                            </View>

                            <View style={styles.midbtn}>
                                <Pressable onPress={() => { this.refs.swiper.scrollBy(1), this.setState({ dbc2: '#FA8072' }) }} style={styles.btn}>
                                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#ffffff' }}>Continue</Text>
                                </Pressable>
                            </View>
                        </View>
                        {/* Slide2 */}
                        <View style={{ flex: 1 }}>
                            <Swiper
                                scrollEnabled={true}
                                showsButtons={false}
                                loop={false}
                                showsPagination={false}
                                ref="otp"
                            >
                                {/* Slide2-1 */}
                                <View style={{ flex: 1 }}>
                                    <View style={{ height: '20%', paddingLeft: '10%', }}>
                                        <Text style={{ fontSize: 26, fontWeight: '400', color: '#707070' }}>How do we contact you?</Text>
                                    </View>

                                    <View style={{ flex: 1, alignItems: 'center', }}>
                                        <TextInput
                                            placeholder='Email'
                                            inputMode="email"
                                            fontSize={18}
                                            style={styles.txtfld}
                                        />
                                        <TextInput
                                            placeholder='Number'
                                            inputMode="numeric"
                                            fontSize={18}
                                            style={styles.txtfld2}
                                        />
                                    </View>
                                </View>

                                {/* Slide2-2 */}
                                <View style={{ height: '100%', padding: '4%'}}>
                                    <View style={{ height: '33%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 26, fontWeight: '400', color: '#707070', paddingBottom: '2%' }}>Verify your number</Text>
                                        <Text style={{ fontSize: 14, color: '#707070', paddingBottom: '4%' }}>Enter code sent to 72 123 456</Text>
                                    </View>
                                    <View style={styles.otpCon}>
                                     
                                        <View style={styles.otpSqr}>
                                            
                                            <TextInput
                                                maxLength={1}
                                                fontSize={23}
                                                keyboardType="numeric"
                                                textAlign="center"
                                                onChangeText={() => this.refs['2nd'].focus()}
                                            />
                                        </View>
                                        <View style={styles.otpSqr}>
                                            <TextInput
                                                ref={'2nd'}
                                                maxLength={1}
                                                fontSize={23}
                                                keyboardType="numeric"
                                                textAlign="center"
                                                onChangeText={() => this.refs['3rd'].focus()}
                                            />
                                        </View>
                                        <View style={styles.otpSqr}>
                                            <TextInput
                                                ref={'3rd'}
                                                maxLength={1}
                                                fontSize={23}
                                                keyboardType="numeric"
                                                textAlign="center"
                                                onChangeText={() => this.refs['4th'].focus()}
                                            />
                                        </View>
                                        <View style={styles.otpSqr}>
                                            <TextInput
                                                ref={'4th'}
                                                maxLength={1}
                                                onChangeText={() => { this.refs.swiper.scrollBy(1), this.setState({ dbc3: '#FA8072' }) }}
                                                fontSize={23}
                                                keyboardType="numeric"
                                                textAlign="center"
                                            />
                                        </View>
                                    </View>
                                    <Pressable style={styles.resend}>
                                        <Text style={{ fontSize: 14, color: '#707070' }}>Resend OTP</Text>
                                    </Pressable>
                                </View>

                            </Swiper>


                            <View style={styles.midbtn}>
                                <Pressable onPress={() => this.onSwipe()} display={this.state.cntn} style={styles.btn}>
                                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#ffffff' }}>Continue</Text>
                                </Pressable>
                            </View>
                        </View>
                        {/* Slide3 */}
                        <View>
                            <View style={styles.midtxt}>
                                <Text style={{ fontSize: 26, fontWeight: '400', color: '#707070' }}>Create a password</Text>
                            </View>

                            <View style={styles.midfld}>
                                <TextInput
                                    placeholder='Password'
                                    fontSize={18}
                                    style={styles.txtfld}
                                />
                                <TextInput
                                    placeholder='Confirm Password'
                                    fontSize={18}
                                    style={styles.txtfld2}
                                />
                            </View>

                            <View style={styles.midbtn}>
                                <Pressable onPress={() => this.props.navigation.navigate('Landing')} disabled={this.state.disabled} style={[styles.btn, { opacity: this.state.opacity }]}>
                                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#ffffff' }}>Continue</Text>
                                </Pressable>

                                <CheckBox
                                    containerStyle={{ height: '80%', width: '85%' }}
                                    checkedColor="#429588"
                                    textStyle={{ color: '#707070', fontSize: 18, fontWeight: 'normal', }}
                                    title='I confirm that I have read and agree to the Terms & Conditions and acknowledge the Privacy Policy'
                                    checked={this.state.check}
                                    onPress={() => this.checked()}
                                />
                            </View>

                        </View>

                    </Swiper>
                </View>

                <View style={styles.bot}>
                    <View style={styles.dot1} />
                    <View style={styles.line1} />
                    <View style={[styles.dot2, { backgroundColor: this.state.dbc2 }]} />
                    <View style={styles.line2} />
                    <View style={[styles.dot3, { backgroundColor: this.state.dbc3 }]} />
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
        //backgroundColor: '#c1c1c1',
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    back: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        paddingLeft: '10%',

    },

    logoCon: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    logo: {
        height: 30,
        width: '66%',
    },


    midtxt: {
        height: '10%',
        width: '100%',
        paddingLeft: '10%',
    },

    midfld: {
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtfld: {
        height: 48,
        width: 305,
        borderRadius: 8,
        paddingLeft: '4%',
        backgroundColor: '#F2EEED'
    },

    txtfld2: {
        height: 48,
        width: 305,
        borderRadius: 8,
        paddingLeft: '4%',
        backgroundColor: '#F2EEED',
        marginTop: '8%',
    },

    txtfld3: {
        height: 48,
        width: 305,
        borderRadius: 8,
        paddingLeft: '4%',
        backgroundColor: '#F2EEED',
        marginTop: '8%',
    },

    midbtn: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btn: {
        height: 48,
        width: 305,
        borderRadius: 24,
        marginBottom: '2%',
        backgroundColor: '#FA8072',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bot: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    dot1: {
        height: 18,
        width: 18,
        borderRadius: 9,
        backgroundColor: '#FA8072',
    },

    dot2: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#FA8072',

    },

    dot3: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#FA8072',
        backgroundColor: '#FFF',
    },

    line1: {
        width: 115,
        borderBottomWidth: 1,
        borderColor: '#FA8072',
    },

    line2: {
        width: 115,
        borderBottomWidth: 1,
        borderColor: '#FA8072',
    },

    bot1: {
        //backgroundColor: 'red',
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    otpCon: {
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginBottom: '10%',
    },

    otpSqr: {
        height: 49,
        width: 47,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2EEED'
    },

    resend: {
        height: 40,
        width: 148,
        borderRadius: 24,
        backgroundColor: '#F2EEED',
        addingLeft: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }



});