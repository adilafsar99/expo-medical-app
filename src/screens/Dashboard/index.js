import React, { useState, useEffect } from "react";
import {StatusBar} from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
import appointments from "../../../assets/Images/Dashboard/card1.png";
import records from "../../../assets/Images/Dashboard/card2.png";
import forum from "../../../assets/Images/Dashboard/card3.png";
import settings from "../../../assets/Images/Dashboard/card4.png";
import ButtonCard from "../../components/ButtonCard";

const Dashboard = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image source={require("../../../assets/Images/user.png")} />
      ),
    });
  });
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={require("../../../assets/Images/Dashboard/menu.png")} />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            containerStyle={{
              width: "95%",
              padding: 0,
              borderBottomColor: "red",
              marginTop: 40,
            }}
            inputContainerStyle={{
              borderColor: "#fff",
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              borderRadius: 5,
              height: 60,
            }}
            inputStyle={{ backgroundColor: "#fff", padding: 10 }}
            placeholder="Your Location"
            rightIcon={
              <Image
                source={require("../../../assets/Images/Dashboard/search.png")}
                style={{ marginRight: 20 }}
              />
            }
            leftIconContainerStyle={{ padding: 5 }}
          />
        </View>
        <ScrollView
          style={{ flex: 0.9, width: "100%", marginTop: 20 }}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 15,
            justifyContent: "space-around",
          }}
        >
          <ButtonCard title={"Appointments"} src={appointments} />
          <ButtonCard title={"Records"} src={records}/>
          <ButtonCard title={"Forum"}src={forum} />
          <ButtonCard title={"Account Settings"} src={settings} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5EAF3",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#fff",
  },
  para: {
    fontWeight: "300",
    fontSize: 14,
    color: "gray",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 40,
    width: 95 + "%",
    borderRadius: 100,
    backgroundColor: "#f2f2f2",
    color: "gray",
    marginTop: 20,
    maxHeight: 100,
    height: 70,
    borderColor: "#f2f2f2",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#32465e",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 5,
    marginTop: 15,
    margin: "auto",
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 20,
  },
});

export default Dashboard;