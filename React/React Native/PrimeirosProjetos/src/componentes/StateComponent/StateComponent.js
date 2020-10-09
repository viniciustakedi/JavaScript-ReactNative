import React, { Component } from 'react'
import { View, Text, Button } from "react-native";
import styles from "./styles";


export default class StateComponent extends Component {
    state = {
        contador: 0
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.title, styles.titleBold]}>{this.state.contador}
                 <Text style={[styles.title]}> Cliques</Text>
                </Text>

                <Button title="Adicionar" onPress={() =>{
                    this.setState({ 
                        contador: this.state.contador + 1
                    }) 
                }} />

                
                <Button title="Remover" onPress={() =>{
                    this.setState({ 
                        contador: this.state.contador - 1
                    }) 
                }} />
            </View>
        )
    }
}


// export default function () {
//     return (
//         <View style={styles.container}>
//             <Text style={[styles.title, styles.titleBold] }>Healthy 
//                 <Text style={[styles.title]}>Food</Text>
//             </Text>
//         </View>
//     )
// }