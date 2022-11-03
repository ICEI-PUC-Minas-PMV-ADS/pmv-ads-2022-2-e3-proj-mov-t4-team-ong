import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/Ionicons";

import Reminder from "../screens/reminder/Reminder";

import themeContext from "../contexts/themeContext";

colors = themeContext.lightColors

const tabNavigatorOptions = {
    headerShown: false,
    tabBarStyle: { backgroundColor: colors.grey1 },
    tabBarActiveBackgroundColor: colors.grey0
}

const Tab = createBottomTabNavigator()


const ReminderNavigator = () => {
    console.log('Reminder')
    return (
        <Tab.Navigator screenOptions={tabNavigatorOptions}>
            <Tab.Screen
                name='Today'
                options={{
                    tabBarLabel: 'Hoje',
                    tabBarLabelStyle: { color: colors.today, fontSize: 15 },
                    tabBarIcon: () => (
                        <Icon name='today' color={colors.today} size={20} />
                    )
                }}
            >
                {props => <Reminder {...props} title='Hoje' daysAhead={0} />}
            </Tab.Screen>
            <Tab.Screen name='Tomorrow'
                options={{
                    tabBarLabel: 'Amanhã',
                    tabBarLabelStyle: { color: colors.tomorrow, fontSize: 15 },
                    tabBarIcon: () => (
                        <Icon name='today' color={colors.tomorrow} size={20} />
                    )
                }} >
                {props => <Reminder {...props} title='Amanhã' daysAhead={1} />}
            </Tab.Screen>
            <Tab.Screen name='Week'
                options={{
                    tabBarLabel: 'Semana',
                    tabBarLabelStyle: { color: colors.week, fontSize: 15 },
                    tabBarIcon: () => (
                        <Icon name='today' color={colors.week} size={20} />
                    )
                }} >
                {props => <Reminder {...props} title='Semana' daysAhead={7} />}
            </Tab.Screen>
            <Tab.Screen name='Month'
                options={{
                    tabBarLabel: 'Mês',
                    tabBarLabelStyle: { color: colors.month, fontSize: 15 },
                    tabBarIcon: () => (
                        <Icon name='today' color={colors.month} size={20} />
                    )
                }} >
                {props => <Reminder {...props} title='Mês' daysAhead={30} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default ReminderNavigator