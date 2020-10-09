import React from "react";
import { Text, View, ImageBackground, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";



export default function Login(props) {
    {
        return (
            <ImageBackground style={styles.container}

                source={
                    {
                        uri: 'https://www.colourbox.com/preview/14774471-singapore-downtown-ar-night.jpg'
                    }

                }>

                <View style={styles.Main}>
                        <MaterialCommunityIcons name="react" size={100} color="#fff" style={styles.iconReact} />
                    <View style={styles.main2}>

                        <View style={styles.viewinput}>

                            <TextInput style={styles.input} placeholder='UserName:' placeholderTextColor='#888889'></TextInput>
                            <TextInput style={styles.input} placeholder='Passerword:' placeholderTextColor='#888889'></TextInput>


                            <View>
                                <TouchableOpacity style={styles.botaosign}>
                                    <Text style={styles.textSign}>Sign In</Text>
                                </TouchableOpacity>
                                <View style={styles.forgot}>
                                    <Text style={styles.forgotPass}>Forgot Passerword? |</Text>
                                    <Text style={styles.forgotPass}>Register</Text>

                                </View>
                                    <View style={styles.conect}>
                                        <Text style={styles.conectAccont}>Conect whith Social Account</Text>

                                    </View>
                            </View>


                        </View>

                            
                    </View>

                </View>
            </ImageBackground>

        )
    }
}

