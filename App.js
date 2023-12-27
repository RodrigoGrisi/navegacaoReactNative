import React from "react";
import Routes from './src/routes'
import { NavigationContainer, View } from '@react-navigation/native'

export default function App(){
  return(
    <NavigationContainer>
    <Routes/>
    </NavigationContainer>
  )
}