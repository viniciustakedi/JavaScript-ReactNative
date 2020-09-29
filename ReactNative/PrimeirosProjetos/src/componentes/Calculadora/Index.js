import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';

import styles from "./styles";

export default class Screen extends Component {
    constructor() {
        super()


        this.state = {
            displayText: '0',
            reiniciaDisplay: false,
            operador: '',
            n1: 0,
            total: 0
        }
    }

    addOperacao = (op) => {

        
        if (this.state.operador === '') {
            this.setState({
                operador: op,
                n1: parseFloat(this.state.displayText),
                reiniciaDisplay: true
            })
        } else {
            const res = this.fazerConta(op)
            this.setState({
                displayText: res,
                reiniciaDisplay: true,
                n1: res
            })

        }

    }

    
    fazerConta = (op) => {
        let n1 = this.state.n1
        let n2 = parseFloat(this.state.displayText)
        let res = 0

        switch (op) {
            case '+':
               return n1 + n2
            case '-':
                return n1 - n2
                
            case '*':
                return  n1 * n2

            case '/':
                return n1 / n2
            
            case '%':
                return n1 % n2

            default:
                break;
        }
    }

    zerarCalculadora = displayText => {
        this.state = {
            displayText: '0',
            reiniciaDisplay: false,
            operador: '',
            n1: 0,
            total: 0
        }
    }

 adicionaNumero = n => {
    if (this.state.reiniciaDisplay) {
        this.setState({ displayText: n, reiniciaDisplay: false })

    } else {
        let nAnterior = this.state.displayText
        this.setState({ displayText: nAnterior === '0' ? n : nAnterior + n })
    }
}



    
    render() {
        return (
            <>

            <View style={styles.Header}>
                <Text style={styles.textHeader}>{this.state.displayText}</Text>
            </View>

            <View style={styles.Main}>
                <View style={styles.Coluna1}>

        <TouchableOpacity style={[styles.botao, styles.textoCima]} onPress={() => this.state.zerarCalculadora()} ><Text style={styles.texto}>AC</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('7')} ><Text style={styles.texto}>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('4')} ><Text style={styles.texto}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('1')} ><Text style={styles.texto}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.botao, styles.botaoZero]} onPress={() => this.adicionaNumero('0')} ><Text style={styles.texto}>0</Text></TouchableOpacity>

                </View>

                <View style={styles.Coluna2}>
                    <TouchableOpacity style={[styles.botao, styles.textoCima]} onPress={() => Alert.alert('Botão')} ><Text style={styles.texto}>+/-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('8')}><Text style={styles.texto}>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('5')}><Text style={styles.texto}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('2')}><Text style={styles.texto}>2</Text></TouchableOpacity>

                </View>

                <View style={styles.Coluna3}>
                    <TouchableOpacity style={[styles.botao, styles.textoCima]}><Text style={styles.texto} onPress={() => Alert.alert('7')} >%</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('9')}><Text style={styles.texto}>9</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('6')}><Text style={styles.texto}>6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => this.adicionaNumero('3')}><Text style={styles.texto}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Botão')}><Text style={styles.texto}>,</Text></TouchableOpacity>
                </View>

                <View style={styles.Coluna4}>
                    <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() =>this.addOperacao('/')}><Text style={styles.texto}>/</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() =>this.addOperacao('*')}><Text style={styles.texto}>*</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() => this.addOperacao('-')}><Text style={styles.texto}>-</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() => this.addOperacao('+')}><Text style={styles.texto}>+</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.botao, styles.botaoOperadores]} onPress={() =>this.addOperacao('=')}><Text style={styles.texto}>=</Text></TouchableOpacity>
                </View>
            </View>
            </>
        );
    }
}

