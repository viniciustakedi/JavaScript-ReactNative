import React from 'react'
import { View, StyleSheet, Text } from "react-native";
// import Header from "./componentes/Header/Header";
// import SubHeader from "./componentes/SubHeader/SubHeader";
// import ProductList from "./componentes/ProductList/ProductList";
// import StateComponent from "./componentes/StateComponent/StateComponent"
import IMC from "./componentes/Imc/Imc";


export default function () {
  return (
    <View style={estilos.container}>
      
      <IMC />

      {/* <Header />
      <StateComponent />
      <SubHeader />
      <ProductList />  */}
      
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#23c1bd',
  },
})

