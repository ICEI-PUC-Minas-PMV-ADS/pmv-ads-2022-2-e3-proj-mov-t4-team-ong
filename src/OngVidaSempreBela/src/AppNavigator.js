import React, { Component } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./screens/HomePage";
import Profile from "./screens/profile/Profile";
import DrawerNavigator from "./navigator/DrawerNavigator";
import AuthOrApp from "./navigator/AuthOrApp";
import ProjectsList from "./screens/project/ProjectsList";
import Payment from "./screens/payment/Payment";


const Stack = createStackNavigator()

const stackNavigatorOptions = {
  headerShown: false,
}

class AppNavigator extends Component {

  render() {

    return (
      <Stack.Navigator
        screenOptions={stackNavigatorOptions}
        initialRouteName='AuthOrApp'
      >
        <Stack.Screen name='AuthOrApp'>
          {(props) => <AuthOrApp {...props} schema={this.props.schema} />}
        </Stack.Screen>
        <Stack.Screen name='Agenda'>
          {(props) => <DrawerNavigator {...props} schema={this.props.schema} />}
        </Stack.Screen>
        <Stack.Screen name='Principal' >
          {(props) => <HomePage {...props} schema={this.props.schema} />}
        </Stack.Screen>
        <Stack.Screen name='Cadastro'>
          {(props) => <Profile {...props} schema={this.props.schema} stateNew={true} />}
        </Stack.Screen>
        <Stack.Screen name='Entrar'>
          {(props) => <Profile {...props} schema={this.props.schema} stateNew={false} />}
        </Stack.Screen>
        <Stack.Screen name='Projetos'>
          {(props) => <ProjectsList {...props} schema={this.props.schema} />}
        </Stack.Screen>
        <Stack.Screen name='Doações'>
          {(props) => <Payment {...props} schema={this.props.schema} />}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
}

export default AppNavigator;