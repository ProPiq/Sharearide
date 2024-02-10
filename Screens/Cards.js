
import React, { } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from '@expo/vector-icons';

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

const Item = (item) => (

    <TouchableOpacity style={styles.cardSpace}>
        <View style={styles.card}>
            <View style={styles.cardTop}>
                <View style={{ height: '100%', width: '50%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#707070', fontWeight: '500' }}>FNB</Text>
                </View>
                <View style={{ height: '100%', width: '50%', alignItems: 'flex-end' }}>
                    <Image style={{ height: '100%', width: '35%' }} source={require('../assets/fnb.png')} />
                </View>
            </View>
            <View style={styles.cardMid}>
                <Text style={{ fontSize: 22, color: '#707070', fontWeight: '500' }}>**** **** **** 0000</Text>
            </View>
            <View style={styles.cardBot}>
                <View style={{ height: '100%', width: '50%', }}>
                    <Text style={{ fontSize: 12, color: '#707070', marginBottom: '15%' }}>Exp:02/26</Text>
                    <Text style={{ fontSize: 12, color: '#707070', }}>Jon Dough</Text>
                </View>
                <View style={{ height: '100%', width: '50%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Image style={{ height: '55%', width: '30%', }} source={item.image} />
                </View>

            </View>
        </View>
    </TouchableOpacity>

);

const separator = () => {
    return (
        <View style={{ borderWidth: 0.3, borderColor: '#707070' }} />
    )
};

export default class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {

        return (

            <View style={styles.container}>
                <View style={styles.top}>
                    <Pressable onPress={() => this.props.navigation.goBack()} style={styles.drawer}>
                        <Ionicons name={'arrow-back'} size={25} color={'#707070'} />
                    </Pressable>
                    <View style={styles.title}>
                        <Text style={{ color: '#707070' }}>Cards</Text>
                    </View>
                    <View style={styles.notification}>
                        <Ionicons name={'notifications'} size={20} color={'#707070'} />
                    </View>
                </View>
                <SafeAreaView style={styles.bot}>
                    <FlatList
                        ItemSeparatorComponent={separator}
                        data={DATA}
                        renderItem={({ item }) => <Item image={item.image} card={item.card} name={item.name} month={item.month} year={item.year} />}
                        keyExtractor={item => item.id}
                    //extraData={selectedId}

                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard')} style={styles.float}>
                        <Entypo name='plus' size={50} color={'#fff'} />
                    </TouchableOpacity>
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
        height: '8%',
        width: '100%',
        flexDirection: 'row',
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

    bot: {
        height: '92%',
        width: '100%',
        alignItems: 'center',
    },

    cardSpace: {
        height: 200,
       // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        height: '80%',
        width: '93%',
        borderRadius: 23,
        padding: '4%',
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

    cardTop: {
        height: '40%',
        width: '100%',
        flexDirection: 'row',
    },

    cardMid: {
        height: '20%',
        width: '100%',
    },

    cardBot: {
        height: '40%',
        width: '100%',
        flexDirection: 'row',
    },


    float: {
        height: 56,
        width: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FA8072',
        position: 'absolute',
        bottom: 60,
        right: 20
    }

});