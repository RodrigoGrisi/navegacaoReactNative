import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackRouter from './stackRouters';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function Routes() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // PROP QUE ESCONDE A TAB BAR QUANDO SUBIR O TECLADO POR EXEMPLO EM UM INPUT NA HORA DE DIGITAR.
        tabBarHideOnKeyboard: true,
        // IN THIS CASE YOU WILL HIDE THE LABEL CAUSE IT IS FALSE
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: '#202255',
          borderTopWidth: 0,
          padding: 10
        }
      }}

    >
      <Tab.Screen name="HomeStack" component={StackRouter}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="md-home-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen name="Sobre" component={Sobre}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="bar-chart-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen name="Contato" component={Contato}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="contacts" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  }
});