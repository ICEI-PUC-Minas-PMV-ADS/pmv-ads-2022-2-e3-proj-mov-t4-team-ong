import React, { Component } from 'react'

import { LogBox } from "react-native"

import { createDrawerNavigator } from "@react-navigation/drawer"

import HomePage from '../screens/HomePage'
import Menu from '../navigator/Menu'
import OngList from '../screens/ong/ongList'
import ProfileEdit from '../screens/profile/ProfileEdit'
import ReminderNavigator from './ReminderNavigator';


LogBox.ignoreLogs(['Reanimated 2']);

class DrawerNavigator extends Component {

    render() {

        const Drawer = createDrawerNavigator()

        const drawerNavigatorOptions = {
            headerShown: true,
            headerStyle: { backgroundColor: this.props.schema.grey0 },
            headerTitleStyle: { color: this.props.schema.white },
            headerTintColor: this.props.schema.white,
        }

        const { email, name, imageURL } = this.props.route.params

        return (
            <Drawer.Navigator
                {...this.props}
                screenOptions={drawerNavigatorOptions}
                drawerContent={(props) => <Menu {...props} email={email} name={name} schema={this.props.schema} />}
            >
                <Drawer.Screen name='HomePage' options={{ title: 'Principal' }}>
                    {(props) => <HomePage {...props} title='Principal' schema={this.props.schema} />}
                </Drawer.Screen>
                <Drawer.Screen name='Reminder' options={{ title: 'Agenda' }}>
                    {(props) => <ReminderNavigator {...props} title='Hoje' daysAhead={0} schema={this.props.schema} />}
                </Drawer.Screen>
                <Drawer.Screen name='ProfileNew' options={{ title: 'Perfil' }}>
                    {(props) => <ProfileEdit {...props} title='Perfil' daysAhead={0} schema={this.props.schema} />}
                </Drawer.Screen>
                <Drawer.Screen name='Ong' options={{ title: 'Ongs' }}>
                    {(props) => <OngList {...props} title='Ongs' schema={this.props.schema} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        )
    }
}

export default DrawerNavigator