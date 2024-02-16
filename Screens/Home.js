
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { NavigationContainer } from '@react-navigation/native';  // Add this import

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Item = ({ route, navigation }) => (
  //<TouchableOpacity  onPress={() => navigation.navigate("Details", { tripDetails: route })}  style={styles.flatItem}   >

  <TouchableOpacity onPress={() => navigation.navigate('Details', { tripDetails: route })} style={styles.flatItem}>

    <Image
      style={{ height: 120, width: 118, borderRadius: 19, alignSelf: "center" }}
      source={{ uri: route.image }}
    />
    <Text style={{ color: "#707070" }}>{route.company}</Text>
    <View style={{ height: "10%", width: "100%", flexDirection: "row" }}>
      <View style={{ height: "100%", width: "20%", flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="location" color="#FA8072" />
      </View>
      <View style={{ height: "100%", width: "80%", flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 9, color: "#707070" }}>{route.description} </Text>
      </View>
    </View>
    <View style={{ height: "10%", width: "100%", flexDirection: "row" }}>
      <View style={{ height: "100%", width: "20%", flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 name="clock" color="#FA8072" />
      </View>
      <View style={{ height: "100%", width: "80%", flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 9, color: "#707070" }}>{route.departure} - {route.arrival}</Text>
      </View>
    </View>
    <View style={{ height: "10%", width: "100%", flexDirection: "row" }}>
      <View style={{ height: "100%", width: "20%", flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="map-sharp" color="#FA8072" />
      </View>
      <View style={{ height: "100%", width: "80%", flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 9, color: "#707070" }}>{route.total_seats} seats available</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const separator = () => {
  return <View style={{ width: 18 }} />;
};

export default function Home() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [routes, setRoutes] = useState([]);
  const [dates, setDates] = useState([]);
  const [num, setNum] = useState(0);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  useEffect(() => {
    getAsync();
    fetchRoutes();
  }, [searchQuery]);

  const fetchRoutes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://propiq.tech/SR/search.php?query=${searchQuery}`);
      const data = await response.json();

      console.log("API Response Status:", response.status);
      console.log("API Response Data:", data);

      if (data && data.data) {
        setRoutes(data.data);
      } else {
        setRoutes([]);
      }
    } catch (error) {
      console.error("Error fetching routes:", error);
    } finally {
      setLoading(false);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    
    //setDates(date)
    console.log(date);
    hideDatePicker();
  };
  const handleSearch = () => {
    fetchRoutes();
  };

  const increment = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const decrement = () => {
    if (num > 0) {
      setNum((prevNum) => prevNum - 1);
    }

  };
  // const [user, setUser] = useState(route.params.user);
  getAsync = async () => {
    try {
      const name = await AsyncStorage.getItem('name')
      setUser(name)
      //alert(user)
    }
    catch (e) {
      console.log(e)
    }


  }


  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <View style={styles.logoCon}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <TouchableOpacity style={styles.wlcm}>
          <Text style={{ fontSize: 18, color: "#707070" }}>
            Welcome, {user}
          </Text>
          <FontAwesome name="user-circle" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.mid}>
        <View style={styles.midCard}>
          <View style={styles.midCard1}>
            <Text style={{ fontSize: 21, fontWeight: "600", color: "#707070" }}>
              Choose your destination
            </Text>
          </View>
          <View style={styles.midCard2}>
            <TextInput
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              fontSize={15}
              style={styles.txtfld}
              placeholder="Departure"
            />
            <TextInput
              fontSize={15}
              style={styles.txtfld}
              placeholder="Destination"
            />
          </View>
          <View style={styles.midCard3}>
            <View style={{ height: "100%", width: "50%", justifyContent: "center" }}>
              <TouchableOpacity onPress={showDatePicker} style={styles.calendar}>
                <Text style={{ color: "#fff", paddingRight: "10%" }}>Date</Text>
                <Ionicons name="calendar" color="#fff" size={20} />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            <View
              style={{
                height: "100%",
                width: "50%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "10%",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>{dates}</Text>
              {/* <TouchableOpacity
                onPress={() => decrement()}
                style={{
                  height: 26,
                  width: 26,
                  borderRadius: 13,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F2EEED",
                }}
              >
                <FontAwesome5 name="minus" color="#707070" size={18} />
              </TouchableOpacity> */}
              {/* <View
                style={{
                  height: 26,
                  width: 26,
                  borderRadius: 13,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FA8072",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>{num}</Text>
              </View> */}
              {/* <TouchableOpacity
                onPress={() => increment()}
                style={{
                  height: 26,
                  width: 26,
                  borderRadius: 13,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F2EEED",
                }}
              >
                <FontAwesome5 name="plus" color="#707070" size={18} />
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.midCard4}>
            <TouchableOpacity
              style={{
                height: 36,
                width: "100%",
                borderRadius: 18,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#429588",
              }}
              onPress={handleSearch}
            >
              <Text style={{ color: "#fff" }}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bot}>
        <View style={styles.bot1}>
          <Text style={{ fontSize: 21, fontWeight: "300", color: "#707070" }}>
            {searchQuery ? "Search Results" : "Bus Routes"}
          </Text>
        </View>
        <SafeAreaView style={styles.bot2}>
          {loading ? (
            <Text style={{ fontSize: 18, color: "#707070" }}>Please wait...</Text>
          ) : (
            <FlatList
              ItemSeparatorComponent={separator}
              data={routes}
              renderItem={({ item }) => <Item route={item} navigation={navigation} />}
              keyExtractor={(item) => item.uuid}
              horizontal={true}
            />
          )}
        </SafeAreaView>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    height: windowHeight,
    width: windowWidth,
    marginTop: "8%",
  },

  top: {
    height: '10%',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  logoCon: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    height: 29,
    width: "65%",
  },

  wlcm: {
    height: "100%",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: 'row',
  },

  mid: {
    height: 290,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  midCard: {
    height: "90%",
    width: "85%",
    padding: "5%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  midCard1: {
    height: "15%",
    width: "100%",
  },

  midCard2: {
    height: "40%",
    width: "100%",
    justifyContent: "space-between",
  },

  txtfld: {
    paddingLeft: "4%",
    height: 38,
    width: "100%",
    borderRadius: 11,
    backgroundColor: "#F2EEED",
  },

  midCard3: {
    height: "25%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  midCard4: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
  },

  bot: {
    height: "50%",
    width: "100%",
    alignItems: "center",
  },

  bot1: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: "8%",
  },

  bot2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "80%",
    width: "100%",
  },

  flatItem: {
    height: 216,
    width: 140,
    padding: "7%",
    borderRadius: 21,
    alignSelf: 'center',
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  calendar: {
    height: 27,
    width: 94,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FA8072",
  }
});
