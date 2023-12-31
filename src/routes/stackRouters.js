import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from '../pages/Detalhes'
import Home from '../pages/Home'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      options={{
        headerShown: false
      }}
      name="Home" 
      component={Home} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  )
}