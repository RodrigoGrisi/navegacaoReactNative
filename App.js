import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
    <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});