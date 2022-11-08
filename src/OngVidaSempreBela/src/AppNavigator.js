import React from "react"

import { createStackNavigator } from "@react-navigation/stack";

import AuthOrApp from "./navigator/ProfileOrAppNavigator";
import DrawerNavigator from "./navigator/DrawerNavigator";
import NewOrLogin from "./screens/profile/Profile";

const Stack = createStackNavigator();


const stackNavigatorOptions = {
  headerShown: false,
}

const AppNavigator = (props) => {
  console.log('AppNavigator')
  return (
    <Stack.Navigator
      screenOptions={stackNavigatorOptions}
    >
      <Stack.Screen name='AuthOrApp' component={AuthOrApp} />
      <Stack.Screen name='HomePage' component={DrawerNavigator} />
      <Stack.Screen name='Agenda' component={DrawerNavigator} />
      <Stack.Screen name='Cadastro' component={NewOrLogin} />
      <Stack.Screen name='Login' component={NewOrLogin} />
    </Stack.Navigator>
  )
}


export default AppNavigator;