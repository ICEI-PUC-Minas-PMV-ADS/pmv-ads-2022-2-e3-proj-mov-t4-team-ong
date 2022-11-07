import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { Button } from "@rneui/themed";

import Icon from 'react-native-vector-icons/Ionicons';

import UserForm from "./view/UserForm";
import UserList from "./view/UserList";
import TaskList from "./screens/TaskList";
import Auth from "./screens/Auth";
import HomePage from './screens/HomePage';
import AuthOng from "./screens/AuthOng";
import PagInicialOng from "./screens/PagInicialOng";

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
      initialRouteName="HomePage"
      screenOptions={navigatorOptions}
    >
      <Stack.Screen
        name='HomePage'
        component={HomePage}
        options={{ title: 'Canal VSB - HomePage'}}
      />
      <Stack.Screen
        name='Login'
        component={Auth}
        options={{ title: 'Canal VSB - Login'}}
      />
      <Stack.Screen
        name='Cadastro'
        component={Auth}
        options={{ title: 'Canal VSB - Cadastro' }}
      />
      <Stack.Screen
        name='TaskLista'
        component={TaskList}
        options={{ title: 'Canal VSB - TaskList'}}
      />
      <Stack.Screen
        name='CadastroOng'
        component={AuthOng}
        options={{ title: 'Canal VSB - Cadastro ONG'}}
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
      <Stack.Screen
        name='PagInicialOng'
        component={PagInicialOng}
        options={{ title: 'Página Inicial' }}
      />
    </Stack.Navigator>
  )

}

export default App