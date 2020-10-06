import React from 'react'
import { View , Image, Text } from "react-native";
import styles from "./styles";
import {Entypo} from "@expo/vector-icons";


export default function () {
    return (
            <View style={styles.container}>
                <Image  style={styles.cardImage}
                        source={
                            {
                               uri: 'https://partners.winemag.com/wp-content/uploads/2017/06/photo-recipe-rose1.jpg'
                            }
                        }
                    />

                    <View>
                        <Text style={styles.product}>Salmon Bowl</Text>
                        <Text style={styles.price}>R$ 24,00</Text>
                    </View>
                    <Entypo name="plus" size={24} color="black" />  
            </View>



    )
}