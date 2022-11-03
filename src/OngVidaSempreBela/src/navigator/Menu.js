import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { CommonActions } from '@react-navigation/native';
import { Gravatar } from 'react-native-gravatar'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import menuStyle from '../styles/menuStyle'
import themeContext from "../contexts/themeContext"
import logo from '../../assets/imgs/logo.png'


const colors = themeContext.lightColors

export default props => {
    console.log('Menu')
    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'Login',
                    },
                ],
            })
        )
    }

    return (
        <DrawerContentScrollView>
            <View style={menuStyle.container}>
                <TouchableOpacity onPress={logout}>
                    <View style={menuStyle.containerTitle} >
                        <Text style={menuStyle.title}>Vida Sempre Bela</Text>
                        <View style={menuStyle.logoutIcon}>
                            <Icon name='sign-out' size={25} color={colors.trash} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={menuStyle.containerHeader} >
                    <Gravatar
                        style={menuStyle.avatar}
                        className={logo}
                        options={{
                            email: props.email,
                            secure: true
                        }} />
                    <View style={menuStyle.userInfo}>
                        <Text style={menuStyle.name}>
                            {props.name}
                        </Text>
                        <Text style={menuStyle.email}>
                            {props.email}
                        </Text>
                    </View>

                </View>
                <View style={menuStyle.containerItems}>
                    <DrawerItemList {...props} theme={themeContext.lightColors} />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
