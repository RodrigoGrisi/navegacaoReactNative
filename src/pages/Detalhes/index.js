import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Detalhes(){
    return(
        <View style={styles.container}>
            <Text>Página de Detalhes </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3498DB',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})