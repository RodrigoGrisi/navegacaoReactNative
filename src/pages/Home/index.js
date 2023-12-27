import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

import { useNavigation } from "@react-navigation/native";


export default function Home() {

  const navigation = useNavigation();


  function navegaSobre(){navigation.navigate('Sobre', { nome: 'Matheus', email: 'Matheus@teste.com' })}
  function navegaContato(){navigation.navigate('Contato', { nome: 'Matheus', email: 'Matheus@teste.com' })}

  return (
    <View style={styles.container}>
      <Text>Rodrigo Home page</Text>
      <Button title="Ir para sobre" onPress={navegaSobre}/>
      <Button title="Ir para Contato" onPress={navegaContato}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})