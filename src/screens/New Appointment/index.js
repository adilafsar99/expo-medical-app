import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MyButton from "../../components/Button";
import ButtonCard2 from "../../components/ButtonCard2";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

function Doctor() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ECF1FA",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 20,
            width: "95%",
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Languages
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#989BA1",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/c1.png")}
              />{" "}
              English
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#989BA1",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/c2.png")}
              />{" "}
              French
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#989BA1",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/c3.png")}
              />{" "}
              German
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            width: "95%",
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Education
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              UCL - Cliniques Saint - Luc (1987 -1999)- Docteur
            </Text>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              Cardiologue. Recherche au Laboratoire d’échocardiographie.
            </Text>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              Cardiologue. Recherche au Laboratoire d’échocardiographie.
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            width: "95%",
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Publications
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              Electrocardiograms Findings - Lebrun F, Blouard Ph, Ch Brohe{" "}
              {"\n"}
              Quotation of functional mitral regurgitation during bicycle {"\n"}
              exercise in patients with heart failure. 1998
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            width: "95%",
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Description
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              Electrocardiograms Findings - Lebrun F, Blouard Ph, Ch Brohe{" "}
              {"\n"}
              Quotation of functional mitral regurgitation during bicycle {"\n"}
              exercise in patients with heart failure. 1998
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Clinic() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ECF1FA",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 20,
            width: "95%",
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Languages
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#989BA1",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/c1.png")}
              />{" "}
              English
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#989BA1",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/c2.png")}
              />{" "}
              French
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#989BA1",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/c3.png")}
              />{" "}
              German
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            width: "95%",
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Education
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              UCL - Cliniques Saint - Luc (1987 -1999)- Docteur
            </Text>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              Cardiologue. Recherche au Laboratoire d’échocardiographie.
            </Text>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              Cardiologue. Recherche au Laboratoire d’échocardiographie.
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            width: "95%",
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Publications
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              Electrocardiograms Findings - Lebrun F, Blouard Ph, Ch Brohe{" "}
              {"\n"}
              Quotation of functional mitral regurgitation during bicycle {"\n"}
              exercise in patients with heart failure. 1998
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            width: "95%",
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Description
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#BCC0C7",
              }}
            >
              <Image
                source={require("../../../assets/Images/BookAppointment/cas.png")}
              />{" "}
              Electrocardiograms Findings - Lebrun F, Blouard Ph, Ch Brohe{" "}
              {"\n"}
              Quotation of functional mitral regurgitation during bicycle {"\n"}
              exercise in patients with heart failure. 1998
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#2A2AC0",
        },
        tabBarStyle: {
          backgroundColor: "#ECF1FA",
        },
      }}
    >
      <Tab.Screen options={{title: "Doctor"}} name="Doctor" component={Doctor} />
      <Tab.Screen options={{title: "Clinic"}} name="Clinic" component={Clinic} />
      <Tab.Screen option={{title: "Feedbacks"}} name="Feedbacks" component={Clinic} />
    </Tab.Navigator>
  );
}

export default function NewAppointment({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Image
            style={{
              marginRight: 20,
            }}
            source={require("../../../assets/Images/back.png")}
          />
        </TouchableOpacity>
      ),
    });
  });
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image source={require("../../../assets/Images/user.png")} />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            flex: 0.4,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 0.3,
            }}
          >
            <Image
              style={{marginLeft: 45}}
              source={require("../../../assets/Images/BookAppointment/docPic.png")}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              flex: 0.7,
              marginLeft: 40
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 3,
                color: "#1C1C1C ",
              }}
            >
              Dr. Clara Odding
            </Text>
            <Text
              style={{
                color: "#B8BBC1",
              }}
            >
              Dentist
            </Text>
            <Text
              style={{
                width: "60%",
                color: "#B8BBC1",
              }}
            >
              2 Rue de Ermesinde {"\n"}
              Frisange - Luxembour 3 km
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flex: 0.6,
            height: 130,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScrollView
            horizontal={true}
            style={{
              flex: 1,
              marginTop: 10,
              marginBottom: 15
            }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            <ButtonCard2 />
            <ButtonCard2 />
            <ButtonCard2 />
          </ScrollView>
          <MyButton
            color="#2A2AC0"
            title="Book Appointment"
            txtColor="#fff"
            onPress={() => navigation.navigate("Payment")}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          backgroundColor: "green",
          width: "100%",
        }}
      >
        <TabNavigator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF1FA",
    alignItems: "center",
    justifyContent: "center",
  },
});
