import React from 'react';
import { View, StyleSheet } from "react-native";
import Login from "./src/componentes/Login/Login";
import styles from './src/componentes/Login/styles';


export default function () {
  return (
    <View style={styles.container}> 
      <Login /> 
    </View>
  )
  }

