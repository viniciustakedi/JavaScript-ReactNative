import { StyleSheet } from "react-native"

export default StyleSheet.create({
    body:{
        flex: 1,
    },
    
    Header: {
        display: 'flex',
        flex: 1,
        height: "20%",
        backgroundColor: '#ffff',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    },

    textHeader: {
        fontSize: 65,
        margin: 15,
        paddingTop: 35,
    },  

    Main: {
        
        // width: "100%",
        flex: 3,
        height: "80%",
        flexDirection: "row",
        // backgroundColor: 'red',

    },

    Coluna1: {
        width: '25%',
        backgroundColor: 'transparent',

    },
    Coluna2: {
        width: '25%',
        backgroundColor: 'transparent',
    },

    Coluna3: {
        width: '25%',
        backgroundColor: 'transparent',
    },
    Coluna4: {
        width: '25%',
        backgroundColor: 'transparent',
    },
    botao: {
        width: '100%',
        height: '20%',
        fontSize: 200,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#474747',
        borderColor: 'white',
        borderWidth: 1,
        
    },

    botaoZero: {
        position: 'absolute',
        width: '200%',
        bottom: 0,
        left: 0,
        zIndex: 1,
    },

    container: {
        flex: 1,
        backgroundColor: '#23c1bd',


        // paddingHorizontal: 20,
    },
    iconBar: {
        alignItems: 'flex-end',
        margin: 16,

    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500',
        paddingBottom: 10,

    },

    texto: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#fff',
    
    },

    botaoOperadores: {
        backgroundColor: "#fea012",
      
    },

    textoCima: {
        backgroundColor: '#9c9c9c',
    },
});