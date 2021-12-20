import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/config/navigation";

export default function App() {
  return (
    <AppNavigator />
  );
}