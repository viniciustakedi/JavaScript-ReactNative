import React, { Component} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from "../componentes/Calculadora/styles";
import { FontAwesome5 } from '@expo/vector-icons';

import Profile from '../componentes/Calculadora/Index';
import Calculadora from '../componentes/Calculadora/Index';
// import Signin from '../componentes/Calculadora';



export default class Screen extends Component {

    getBodyComponent = (component) => {

        switch (component) {
            case 'Calculadora':
                return <Calculadora />
                break
            case 'Signin':
                return <Signin />
                break
            default:
                return <Profile />
                break
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={styles.iconBar}
                        onPress={() => {
                            this.props.navigation.toggleDrawer()
                        }}
                    >
                        <FontAwesome5 name="bars" size={24} color="#fff" />
                    </TouchableOpacity>

                    <Text style={styles.title}>{this.props.name} Screen</Text>

                    <View style={styles.body} >
                        {this.getBodyComponent(this.props.name) }
                    </View>
                </SafeAreaView>
            </View>
        );
    }

}




