/* import React, { Component } from 'react'
import {
    View,
    ActivityIndicator
} from 'react-native'
import { CommonActions } from '@react-navigation/native';

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import authOrAppStyle from '../styles/authOrAppStyle';

export default class AuthOrApp extends Component {

    componentDidMount = async () => {
        const userDataJson = await AsyncStorage.getItem('userData')
        let userData = null

        try {
            userData = JSON.parse(userDataJson)
        } catch (e) {
            // userData está inválido
        }

        if (userData && userData.token) {
            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
            // this.props.navigation.navigate('Home', userData)
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'HomePage',
                            params: userData,
                        },
                    ],
                })
            );
        } else {
            // this.props.navigation.navigate('Auth')
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Auth',
                        },
                    ],
                })
            )
        }
    }

    render() {
        return (
            <View style={authOrAppStyle.container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}
*/