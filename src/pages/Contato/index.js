import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRoute, useNavigation, StackActions } from "@react-navigation/native";

export default function Contato() {
  const route = useRoute();
  const navegation = useNavigation();
  
function handleHome(){
  navegation.dispatch(StackActions.popToTop())
}

  return (
    <View style={styles.container}>
      <Text>Página de Contato</Text>
      <Text>{route.params?.email}</Text>
      <Button title="Voltar Home" onPress={handleHome}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})