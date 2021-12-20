import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import MyButton from "../../components/Button";
import MainLogo from "../../components/MainLogo";

const App = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  const RenderItem = ({ item }) => {
    return (
      <>
        <View
          style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}
        >
          <Image style={{width: 80, height: 80, resideMode: "contain"}} source={require("../../../assets/Images/introHeader.png")} />
          <Text style={styles.heading}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#2A2AC0",
                backgroundColor: "#ECF1FA",
              }}
            >
              Medical
            </Text>{" "}
            App
          </Text>
          <Text style={{ color: "#181461" , fontSize: 22, fontWeight: "bold", position: "relative", top: 50, width: "50%", textAlign: "center"}}>{item.description}</Text>
        </View>
        <View
          style={{ flex: 0.6, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{width: "100%", resizeMode: "contain"}}
            source={item.image}
          />
        </View>
        <View style={{ flex: 0.1 }}></View>
      </>
    );
  };

  return (
    <>
      {showRealApp ? (
        <View style={styles.container}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../../assets/Images/introHeader.png")}
          />
          <Text style={styles.heading}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#2A2AC0",
                backgroundColor: "#ECF1FA",
              }}
            >
              Medical
            </Text>{" "}
            App
          </Text>
          
            <Text style={{ color: "#181461", fontSize: 25, marginTop: 80 }}>
              Welcome
            </Text>
            <Text style={{ color: "#1C1C1C", fontSize: 15}}>
              Sign in to Continue
            </Text>
      
          <View
            style={{
              marginTop: 50,
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              height: "20%"
            }}
          >
            <MyButton onPress={()=> navigation.navigate("PhoneLogin")} color="#2A2AC0" title="Sign in With Mobile Number" txtColor="#fff" />
            <Text>Or</Text>
            <MyButton color="#3A559F" title="Sign in With Facebook" txtColor="#fff" />
          </View>
          <View style={{position: "absolute", bottom: 10}}>
            <Text>By signing in, you accept our <Text style={{color: "#2A2AC0"}}> Terms and Conditions </Text></Text>
          </View>
        </View>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF1FA",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },

  heading: {
    fontWeight: "normal",
    fontSize: 20,
    color: "#2A2AC0",
  },
});

const slides = [
  {
    key: 1,
    description: "Find Your Doctor",
    image: require("../../../assets/Images/intro1.png"),
    backgroundColor: "#ECF1FA",
  },
  {
    key: 2,
    description: "Storage Your Medical Reports",
    image: require("../../../assets/Images/intro2.png"),
    backgroundColor: "#ECF1FA",
  },
  {
    key: 3,
    description: "Discuss in the Forum",
    image: require("../../../assets/Images/intro3.png"),
    backgroundColor: "#ECF1FA",
  },
];
