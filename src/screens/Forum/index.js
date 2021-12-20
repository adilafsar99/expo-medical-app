import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forum() {
  return (  
    <View style={styles.container}>
        <Text>Forum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
});
