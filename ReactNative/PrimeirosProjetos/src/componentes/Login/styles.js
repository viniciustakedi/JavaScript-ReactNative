import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        height: '100%',
        width: '100%'    
    }
    ,  
    Main:{
        height: '100%',
        width: '100%',
        backgroundColor: '#23c1bd',
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center',

    }
    ,
    main2:{
        height: '50%',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    

    }
    ,
    viewinput:{
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    input:{
        width: 350,
        height:45,
       fontWeight: 'bold',
       backgroundColor: '#fff',
       borderRadius: 15,
       paddingLeft: 10,
        marginBottom: 25,
        
    }
    ,
    viewinputes:{

    }
    ,
    inputes:{
        width: 350,
        height:45,
       fontWeight: 'bold',
       backgroundColor: '#fff',
       borderRadius: 15,
      justifyContent: 'center',
      textTransform: 'uppercase'
      
    },

    botaosign: {
        width: 350,
        height: 50,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#fff',
       borderRadius: 15,
        marginTop: 25,
    },

    textSign: {
        fontWeight: 'bold',
        color: '#23c1bd',
        fontSize:  20,

    },

    iconReact: {
        // padding: 100,
    },  

    forgot: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        
    },

    forgotPass: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    conectAccont: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    conect: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})