import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions, Pressable, SafeAreaView, FlatList, Linking, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CollapsibleView from "@eliav2/react-native-collapsible-view";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        title: 'Question here?',
        text: 'hey there!'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba12',
        title: 'Question here?',
        text: 'hey there!'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6323',
        title: 'Question here?',
        text: 'hey there!'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6934',
        title: 'Question here?',
        text: 'hey there!'
    },
];


export default class Faq extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    makeCall() {
        Linking.openURL(`tel:+267 76390930`)
    }

    sendEmail() {
        Linking.openURL(`mailto:info@propiq.tech`)
    }


    render() {

        return (


            <View style={styles.container}>
                <View style={styles.top}>
                    <Pressable onPress={() => this.props.navigation.goBack()} style={styles.drawer}>
                        <Ionicons name={'arrow-back'} size={25} color={'#707070'} />
                    </Pressable>
                    <View style={styles.title}>
                        <Text style={{ color: '#707070' }}>FAQ</Text>
                    </View>
                    <View style={styles.notification}>
                        <Ionicons name={'notifications'} size={20} color={'#707070'} />
                    </View>
                </View>
                <View style={styles.mid}>
                    <View style={styles.mid1}>
                        <View style={{height: '50%', width: '100%', backgroundColor: 'red'}}>
                            <Text style={styles.midTitle}>FAQ & Support</Text>
                            <Text style={styles.intro}>Welcome to our FAQ page, designed to address your queries and provide clarity on our mobile app.
                                Whether you're a new user or a seasoned pro, find answers to common questions below:
                            </Text>
                        </View>
                        <View style={{ height: '50%', width: '100%', flexDirection: 'row', backgroundColor: 'pink' }}>
                            <Pressable onPress={() => this.makeCall()} style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.intro}>+267 7639 0930</Text>
                            </Pressable>
                            <Pressable onPress={() => this.sendEmail()} style={{ height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.intro}>info@propiq.tech</Text>
                            </Pressable>
                        </View>

                    </View>
                    <SafeAreaView style={styles.mid}>
                        <FlatList
                            style={{ height: '100%' }}
                            data={DATA}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <CollapsibleView style={styles.collapse} noArrow={true} title={item.title}>
                                        <Text style={styles.collTxt}>{item.text}</Text>
                                    </CollapsibleView>
                                )
                            }} />
                    </SafeAreaView>
                </View>

                <View style={styles.bot}>

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
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        //backgroundColor: '#c1c1c1'
    },

    drawer: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red'
    },

    title: {
        height: '100%',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green'
    },

    notification: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue'
    },

    mid: {
        height: '92%',
        width: '100%',
    },

    mid1: {
        height: '20%',
        width: '100%',
        backgroundColor: 'blue'
    },

    midTitle: {
        color: '#707070',
        fontSize: 20,
        paddingBottom: '2%'
    },

    intro: {
        color: '#707070',
        textAlign: 'justify',
    },

    mid2: {
        height: '80%',
        width: '100%',
    },

    collapse: {
        alignItems: 'flex-start',
        backgroundColor: '#e9fff3',
        borderWidth: 0
    },

    collTxt: {
        color: '#707070'
    }
});