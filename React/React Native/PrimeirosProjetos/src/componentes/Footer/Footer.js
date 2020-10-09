import React from "react";
import {Text, View, StyleSheet} from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function () {
    return (
        <View style = {styles.container}> 
            <MaterialIcons name="arrow-back" size={32} color="white" />
        </View>
    );
};
