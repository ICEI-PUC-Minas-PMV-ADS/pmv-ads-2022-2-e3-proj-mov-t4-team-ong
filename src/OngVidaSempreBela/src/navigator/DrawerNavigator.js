import React, { Component } from 'react'

import { LogBox } from "react-native"

import { createDrawerNavigator } from "@react-navigation/drawer"

import Menu from '../navigator/Menu'
import ReminderNavigator from './ReminderNavigator';

LogBox.ignoreLogs(['Reanimated 2']);

class DrawerNavigator extends Component {
    
    render() {
        
        console.log('DrawerNavigator')

        const Drawer = createDrawerNavigator()

        const drawerNavigatorOptions = {
            headerShown: true,
        }
        
        const { email, name } = this.props.route.params

        return (
            <Drawer.Navigator
                {...this.props}
                screenOptions={drawerNavigatorOptions}
                drawerContent={(props) => <Menu {...props} email={email} name={name} schema={this.props.schema} />}
            >
                <Drawer.Screen name='Reminder' options={{title: 'Agenda'}}>
                    {(props) => <ReminderNavigator {...props} title='Hoje' daysAhead={0} schema={this.props.schema} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        )
    }
}

export default DrawerNavigator