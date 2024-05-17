import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

const styles = StyleSheet.create({
    contenedor:{
        width:'100%',
        height:'50%',
        backgroundColor:'red',
        flexDirection:"row",
        alignItems:'center',
    },
    titulos:{
        fontSize:50,
        color: 'white',
        marginTop:5
    },
    entrada:{
        fontSize:50,
        padding:20,
    }
})

export default function App(){
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulos}>Holi -</Text>
            <View>
                <TextInput style={styles.entrada} placeholder="Agregar"/>
            </View>
        </View>
    )
}