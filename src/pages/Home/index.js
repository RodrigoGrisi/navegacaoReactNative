import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navegaSobre() {
    navigation.navigate('Sobre')
  }

  function navegaDetalhes() {
    navigation.navigate('Detalhes')
  }

  function navegaContato(){
    navigation.navigate('Contato')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitulo}>Welcome to App</Text>

    <TouchableOpacity style={styles.btnSobre} onPress={navegaDetalhes}>
    <Text> Ir para Detalhes</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnSobre} onPress={navegaSobre}>
    <Text> Ir para sobre</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.btnSobre} onPress={navegaContato}>
    <Text> Ir para Contato</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498DB'
  },
  textTitulo:{
    fontSize: 30,
    marginBottom: 10,
    color: '#fff'
  },
  btnSobre:{
    backgroundColor: '#fff',
    width: 250,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 8
  }
})