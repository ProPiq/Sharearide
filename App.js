import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNav from "./Navigation/AuthNav";
import TabNav from "./Navigation/TabNav";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

// const getIsSignedIn = () => {

//   return false;
// };



// getAsync = async () => {
//   try {
//     const name = await AsyncStorage.getItem('name')

//     if (name !== null) {
//       // navigation.navigate('Landing')
//       console.log('logged', name)
//       return true;
//     }
//     else {
//       console.log('not logged')
//       return false;
//     }

//   } catch (e) {
//     // error reading value
//     console.log(e)

//   }
// }

export default function App() {
 // const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {isSignedIn ? (
          <> */}
            <Stack.Screen
              name="Landing"
              component={Home}
              options={{ headerShown: false }}
            />
          {/* </>
        ) : (
          <> */}
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{ headerShown: false }}
            />
          {/* </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );

}

function Home() {
  return <TabNav />;
}

function SignInScreen() {
  return <AuthNav />;
}


