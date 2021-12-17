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
  createDrawerNavigator
} from '@react-navigation/drawer';
import {
  auth,
  onAuthStateChanged
} from '../../Firebase/Firebase';
import {ScreenOne, ScreenTwo} from '../../../screens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
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
      <Drawer.Navigator initialRouteName="ScreenOne">
        <Drawer.Screen
      name="ScreenOne"
      component={ScreenOne}
      options={ { title: 'Screen One' }} />
        <Drawer.Screen
      name="Screen Two"
      component={ScreenTwo}
      options={ { title: 'Screen Two' }} />
      </Drawer.Navigator>
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