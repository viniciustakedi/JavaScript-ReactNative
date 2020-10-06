import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import MyComponent from "./componentes/MyComponent/MyComponent";
import Person from "./componentes/Person/Person";

const pessoas = [
  {
    nome: 'Rolindo Augusto',
    idade: '17',
    email: 'roro@gmail.com',
    key: '0',
  },
  {
    nome: 'Lucas Sidoka',
    idade: '24',
    email: 'sidokaonly@gmail.com',
    key: '1',
  },
  {
    nome: 'Pericles',
    idade: '59',
    email: 'pepeririclescles@gmail.com',
    key: '2',
  },
]

const MeuApp = function (){
  return ( <View style = {estilos.container}>

            <MyComponent txt='Teste'/>
            {
              pessoas.map(function (pessoa) {
                
                return <Person
                          key={pessoa.codigo}
                          nome={pessoa.nome}
                          idade={pessoa.idade}
                          email={pessoa.email}
                        />
              })
            }
          </View>
  );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23c1bd',
    },
});

export default MeuApp;