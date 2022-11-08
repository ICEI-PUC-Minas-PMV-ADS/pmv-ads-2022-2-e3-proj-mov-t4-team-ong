import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/Ionicons";

import themeContext from "../contexts/themeContext";
import Profile from "../screens/profile/Profile";

colors = themeContext.lightColors

const tabNavigatorOptions = {
    headerShown: false,
    tabBarStyle: { backgroundColor: colors.grey1 },
    tabBarActiveBackgroundColor: colors.grey0
}

const Tab = createBottomTabNavigator()


const ProfileNavigator = () => {
    console.log('Profile')
    return (
        <Tab.Navigator screenOptions={tabNavigatorOptions}>
            <Tab.Screen
                name='Cadastro'
                options={{
                    tabBarLabel: 'Cadastro',
                    tabBarLabelStyle: { color: colors.today, fontSize: 15 },
                    tabBarIcon: () => (
                        <Icon name='person-add' color={colors.today} size={20} />
                    )
                }}
            >
                {props => <Profile {...props} title='Cadastro' stageNew={true} />}
            </Tab.Screen>
            <Tab.Screen name='Login'
                options={{
                    tabBarLabel: 'Entrar',
                    tabBarLabelStyle: { color: colors.tomorrow, fontSize: 15 },
                    tabBarIcon: () => (
                        <Icon name='log-in' color={colors.tomorrow} size={20} />
                    )
                }} >
                {props => <Profile {...props} title='Login' stageNew={false} />}
            </Tab.Screen>
            <Tab.Screen name='Atualizar'
                options={{
                    tabBarLabel: 'Atualizar',
                    tabBarLabelStyle: { color: colors.week, fontSize: 15 },
                    tabBarIcon: () => (
                        <Icon name='person' color={colors.week} size={20} />
                    )
                }} >
                {props => <Profile {...props} title='Atualizar' stageNew={null} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default ProfileNavigator