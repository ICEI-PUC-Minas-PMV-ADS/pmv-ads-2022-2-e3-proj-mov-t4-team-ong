import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Estilos from './src/components/estilos'
import Listagem from './src/components/View/Listagem';
import PerfilOng from './src/components/View/PerfilOng';
import AreaDoacao from './src/components/View/AreaDoacao';

const Stack = createNativeStackNavigator();

export default () => {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Listagem">
    <Stack.Screen name="Listagem" component={Listagem} />
      <Stack.Screen name="PerfilOng" component={PerfilOng} />
      <Stack.Screen name="AreaDoacao" component={AreaDoacao} />
    </Stack.Navigator>
  </NavigationContainer>


/*
      {
    <SafeAreaView style={Estilos.container}>
      <Listagem />
       <AreaDoacao />
       <StatusBar style="auto" />
       </SafeAreaView>
      }
      */
  );
}
