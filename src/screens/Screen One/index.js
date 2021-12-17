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

const ScreenOne = ({navigation}) => {
  return (
    <View style={styles.screenOne}>
      <Text>
        Screen #1
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenTwo')}>
        <Text>
          Change Screen
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScreenOne;