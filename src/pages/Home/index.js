import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const navigation = useNavigation();

  function navegaSobre(){navigation.navigate('Sobre')}

  return (
    <View style={styles.container}>
      <Text>Rodrigo Home page</Text>
      <Button title="Ir para sobre" onPress={navegaSobre}/>
      <Button title="Ir para Contato" onPress={()=> navigation.navigate('Contato')}/>
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