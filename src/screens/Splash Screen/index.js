import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import MainLogo from "../../components/MainLogo";
import { LinearGradient } from "expo-linear-gradient";

function SplashScreen({ navigation }) {
  return (
    <>
      <LinearGradient colors={["#2929BB", "#15155F"]} style={styles.background}>
        <MainLogo />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: 20,
    height: "100%",
  },
});

export default SplashScreen;