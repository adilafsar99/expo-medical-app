import {
  StatusBar
} from 'expo-status-bar';
import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import {
  auth,
  onAuthStateChanged
} from '../../Firebase/Firebase';
import {ScreenOne, ScreenTwo} from '../../../screens';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [isAuth,
    setIsAuth] = useState(false);
  const [uid,
    setUid] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUid(user.uid);
      }
    })
  }, []);
  return(
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen
      name="ScreenOne"
      component={ScreenOne}
      options={ { title: 'Screen One' }} />
        <Stack.Screen
      name="Screen Two"
      component={ScreenTwo}
      options={ { title: 'Screen Two' }} />
      </Stack.Navigator>
         </NavigationContainer>
  )
}

 const styles = StyleSheet.create({
   screenOne: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#c1c1c1"
   },
    screenTwo: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#c1c1c1"
   },
});