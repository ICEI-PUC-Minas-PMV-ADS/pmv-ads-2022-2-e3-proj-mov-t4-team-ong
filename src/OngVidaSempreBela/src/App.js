import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { Button } from "@rneui/themed";

import Icon from 'react-native-vector-icons/Ionicons';

import UserForm from "./view/UserForm";
import UserList from "./view/UserList";
import TaskList from "./screens/TaskList";

const Stack = createNativeStackNavigator()

const App = (props) => {

  const { colors } = useTheme();

  const navigatorOptions = {
    headerStyle: {
      backgroundColor: colors.onSecondary
    },
    headerTintColor: colors.primary,
    headerTitleSyle: {
      fontWeight: 'bold'
    }
  }

  return (
    <Stack.Navigator
      initialRouteName="TaskList"
      screenOptions={navigatorOptions}
    >
      <Stack.Screen
        name='Ong Vida Sempre Bela - TaskList'
        component={TaskList}
        options={({ navigation }) => {
          return {
          }
        }}
      />
      <Stack.Screen
        name='UserList'
        component={UserList}
        options={({ navigation }) => {
          return {
            title: "Lista de Usuários",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("UserForm")}
                type='clear'
                icon={<Icon name='add' size={25} color={colors.primary} />}
              />
            )
          }
        }}
      />
      <Stack.Screen
        name='UserForm'
        component={UserForm}
        options={{ title: 'Formulário de Usuáros' }}
      />
    </Stack.Navigator>
  )

}

export default App