import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function MyAppointments({navigation}) {
  return (  
    <View style={styles.container}>
        <Text>My Appointments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:20
  },
});