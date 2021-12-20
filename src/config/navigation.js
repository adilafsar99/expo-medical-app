import * as React from "react";
import { useState } from "react";
import { View, Text, Image, BackHandler } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import {SplashScreen, IntroSlider, PhoneLogin, PhoneVerification, UserLocation, Dashboard, MyAppointments, NewAppointment, AppointmentForm, Payment, MedicalRecords, Forum, Statistics, Settings, Help} from "../screens";
import CustomDrawer from "../components/CustomDrawer";

function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="NewAppointment">
      <Stack.Screen
        name="NewAppointment"
        component={NewAppointment}
        options={{
          headerStyle: {
            backgroundColor: "#ECF1FA",
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerStyle: {
            backgroundColor: "#ECF1FA",
          },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            initialRouteName="IntroSlider"
            screenOptions={{
              drawerLabelStyle: {
                marginLeft: -25,
              },
            }}
          >
            <>
              <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  title: "Dashboard",
                  headerStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 150,
                  },
                  headerTintColor: "#181461",
                  headerTitleContainerStyle: {
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: 20,
                  },
                  headerTitleStyle: {
                    color: "#181461",
                    fontSize: 25,
                  },
                  headerLeftContainerStyle: {
                    justifyContent: "flex-start",
                    marginTop: 20,
                    padding: 10,
                  },
                  headerRightContainerStyle: {
                    justifyContent: "flex-start",
                    marginTop: 20,
                    padding: 10,
                  },
                }}
              />
              <Drawer.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
              />
              <Drawer.Screen
                name="IntroSlider"
                component={IntroSlider}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShown: false,
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
              />
              <Drawer.Screen
                name="PhoneLogin"
                component={PhoneLogin}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShown: false,
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
              />
              <Drawer.Screen
                name="PhoneVerification"
                component={PhoneVerification}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShown: false,
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
              />
              <Drawer.Screen
                name="UserLocation"
                component={UserLocation}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShown: false,
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
              />
              <Drawer.Screen
                name="MyAppointments"
                component={MyAppointments}
                options={{
                  drawerIcon: () => (
                    <Image
                      source={require("../../assets/Images/DrawerImages/myapoint.png")}
                    />
                  ),
                  title: "My Appointments",
                  headerStyle: {
                    backgroundColor: "#22283",
                  },
                  headerTintColor: "#fff",
                }}
              />
              <Drawer.Screen
                name="BookAppointment"
                component={StackNavigator}
                options={{
                  headerShown: false,
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShadowVisible: false,
                }}
              />
              <Drawer.Screen
                name="NewAppointment"
                component={NewAppointment}
                options={{
                  title: "New Appointment",
                  headerStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 150,
                  },
                  headerTintColor: "#181461",
                  headerTitleContainerStyle: {
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: 20,
                  },
                  headerTitleStyle: {
                    color: "#181461",
                    fontSize: 25,
                  },
                  headerLeftContainerStyle: {
                    justifyContent: "flex-start",
                    marginTop: 20,
                    padding: 10,
                  },
                  headerRightContainerStyle: {
                    justifyContent: "flex-start",
                    marginTop: 20,
                    padding: 10,
                  },
                  drawerIcon: () => (
                    <Image
                      source={require("../../assets/Images/DrawerImages/newappoint.png")}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="MedicalRecords"
                component={MedicalRecords}
                options={{
                  drawerIcon: () => (
                    <Image
                      source={require("../../assets/Images/DrawerImages/records.png")}
                    />
                  ),
                  title: "Medical Records",
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
              />
              <Drawer.Screen
                name="Forum"
                component={Forum}
                options={{
                  drawerIcon: () => (
                    <Image
                      source={require("../../assets/Images/DrawerImages/forum.png")}
                    />
                  ),
                  title: "Forum",
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
              />
            </>
            <Drawer.Screen
              name="Statistics"
              component={Statistics}
              options={{
                drawerIcon: () => (
                  <Image
                    source={require("../../assets/Images/DrawerImages/stats.png")}
                  />
                ),
                title: "Statistics",
                headerStyle: {
                  backgroundColor: "#22283e",
                },
                headerTintColor: "#fff",
              }}
            />
            <Drawer.Screen
              name="Settings"
              component={Settings}
              options={{
                drawerIcon: () => (
                  <Image
                    source={require("../../assets/Images/DrawerImages/settings.png")}
                  />
                ),
                title: "Account Settings",
                headerStyle: {
                  backgroundColor: "#22283e",
                },
                headerTintColor: "#fff",
              }}
            />
            <Drawer.Screen
              name="Help"
              component={Help}
              options={{
                drawerIcon: () => (
                  <Image
                    source={require("../../assets/Images/DrawerImages/help.png")}
                  />
                ),
                title: "Help",
                headerStyle: {
                  backgroundColor: "#22283e",
                },
                headerTintColor: "#fff",
              }}
            />
          </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;