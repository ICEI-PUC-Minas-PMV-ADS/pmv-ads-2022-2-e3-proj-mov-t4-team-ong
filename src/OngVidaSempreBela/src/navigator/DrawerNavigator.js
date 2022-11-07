import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from "./Menu";
import HomePage from "../screens/HomePage";
import ReminderNavigator from "./ReminderNavigator";
import ProfileNavigator from "./ProfileNavigator";


const Drawer = createDrawerNavigator();

const drawerNavigatorOptions = {
    headerShown: true,
    activeTintColor: 'red',
}

const DrawerNavigator = (props) => {
    console.log('DrawerNavigator', props)

    const { email, name } = props.route.params

    return (
        <Drawer.Navigator
            {...props}
            screenOptions={drawerNavigatorOptions}
            drawerContent={(props) => <Menu {...props} email={email} name={name} />}
        >
            <Drawer.Screen name='Principal'>
                {(props) => <HomePage {...props} title='Principal' />}
            </Drawer.Screen>
            <Drawer.Screen name="Reminder" options={{ title: 'Agenda' }}>
                {props => <ReminderNavigator {...props} title='Hoje' daysAhead={0} />}
            </Drawer.Screen>
            <Drawer.Screen name="Profile" options={{ title: 'Perfil' }}>
                {props => <ProfileNavigator {...props} title='Perfil' stageNew='true' />}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;