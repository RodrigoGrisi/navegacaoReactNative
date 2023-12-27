import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          // PROP QUE ESCONDE A TAB BAR QUANDO SUBIR O TECLADO POR EXEMPLO EM UM INPUT NA HORA DE DIGITAR.
          tabBarHideOnKeyboard: true,
          // IN THIS CASE YOU WILL HIDE THE LABEL CAUSE IT IS FALSE
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          tabBarStyle:{
            backgroundColor: '#202255',
            borderTopWidth: 0,
            padding: 10
          }


        }}
      
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon:({color, size}) =>{
              return <Ionicons name="md-home-outline" size={size} color={color} />
            }
          }}
        />
        <Tab.Screen name="Sobre" component={Sobre}
          options={{
            tabBarIcon:({color, size}) =>{
              return <Ionicons name="bar-chart-outline" size={size} color={color} />
            }
          }}
        />
        <Tab.Screen name="Contato" component={Contato}
          options={{
            tabBarIcon:({color, size}) =>{
              return <AntDesign name="contacts" size={size} color={color} />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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