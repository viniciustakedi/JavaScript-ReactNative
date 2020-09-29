import React, { Component } from 'react';
import { View, StyleSheet, Text} from "react-native";
import Login from "./src/componentes/Login/Login";
import styles from './src/componentes/Login/styles';
import CalcScreen from './src/componentes/Calculadora/Index';
// import Calculadora from './src/componentes/Calculadora/styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// Criação do app

const Drawer = createDrawerNavigator();

export default class App extends Component{
  render() {
    return (
    <View style={styles.container}>
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profile"
        // drawerContent={Perfil}
        drawerContentOptions={{
          activeTintColor: '#23c1bd',
          itemStyle: { marginVertical: 30,},
        }}
        hideStatusBar={true}
        drawerTyper="slide"
        >
        {/* <Drawer.Screen name="Profile" component={Profile} /> */}
        <Drawer.Screen name="Login" component={Login} options={{gestureEnable: false}} />
        {/* <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
        <Drawer.Screen name="Calculadora" component={CalcScreen} />
        {/* <Drawer.Screen name="Signin" component={SigninScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>

    </View>
      )
    }
}










// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from "./Screens/Home";
// import NotificationsScreen from "./Screens/Notification";

// import {
//   Profile,
//   Signin,
//   Calculadora
// } from './src/Screens/Index';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//    
//   );

