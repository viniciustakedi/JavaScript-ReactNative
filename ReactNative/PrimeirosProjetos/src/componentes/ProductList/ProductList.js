import React from 'react'
import { View, Text } from "react-native";
import styles from "./styles";
import ProductCard from "../ProductCard/ProductCard";

export default function () {
    return (
            <View style={styles.containerContent}>
                <ProductCard />
            </View>
    )
}