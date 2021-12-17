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

const ScreenTwo = ({navigation}) => {
  return (
    <View style={styles.screenOne}>
      <Text>
        Screen #2
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenOne')}>
        <Text>
          Change Screen
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScreenTwo;