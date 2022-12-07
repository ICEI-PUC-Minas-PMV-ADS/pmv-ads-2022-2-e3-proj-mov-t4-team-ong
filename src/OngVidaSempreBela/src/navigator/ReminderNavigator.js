import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReminderList from '../screens/reminder/ReminderList'

class ReminderNavigator extends Component {
    render() {
        
        const Tab = createBottomTabNavigator()

        const tabOptions = {
            headerShown: false,
            tabBarActiveTintColor: this.props.schema.white,
            tabBarInactiveBackgroundColor: this.props.schema.grey1,
            tabBarActiveBackgroundColor: this.props.schema.grey2,
        }

        return (
            <Tab.Navigator
                screenOptions={tabOptions}
            >
                <Tab.Screen
                    name='Hoje'
                    color={this.props.schema.today}
                    tabBarLabel={{ color: this.props.schema.today }}
                    options={{
                        tabBarIcon: () => <Icon name='calendar' size={30} color={this.props.schema.today} />
                    }}
                >
                    {(props) => <ReminderList
                        {...props}
                        title='Hoje'
                        daysAhead={0}
                        schema={this.props.schema}
                    />}
                </Tab.Screen>
                <Tab.Screen
                    name='Amanhã'
                    color={this.props.schema.tomorrow}
                    tabBarLabel={{ color: this.props.schema.tomorrow }}
                    options={{
                        tabBarIcon: () => <Icon name='calendar' size={30} color={this.props.schema.tomorrow} />
                    }}
                >
                    {(props) => <ReminderList
                        {...props}
                        title='Amanhã'
                        daysAhead={1}
                        schema={this.props.schema}
                    />}
                </Tab.Screen>
                <Tab.Screen
                    name='Semana'
                    color={this.props.schema.week}
                    tabBarLabel={{ color: this.props.schema.week }}
                    options={{
                        tabBarIcon: () => <Icon name='calendar' size={30} color={this.props.schema.week} />
                    }}
                >
                    {(props) => <ReminderList
                        {...props}
                        title='Semana'
                        daysAhead={7}
                        schema={this.props.schema}
                    />}
                </Tab.Screen>
                <Tab.Screen
                    name='Mês'
                    color={this.props.schema.month}
                    tabBarLabel={{ color: this.props.schema.month }}
                    options={{
                        tabBarIcon: () => <Icon name='calendar' size={30} color={this.props.schema.month} />
                    }}
                >
                    {(props) => <ReminderList
                        {...props}
                        title='Mês'
                        daysAhead={30}
                        schema={this.props.schema}
                    />}
                </Tab.Screen>
            </Tab.Navigator>
        )
    }
}

export default ReminderNavigator