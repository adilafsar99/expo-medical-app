import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MedicalRecords() {
  return (  
    <View style={styles.container}>
        <Text>Medical Records</Text>
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