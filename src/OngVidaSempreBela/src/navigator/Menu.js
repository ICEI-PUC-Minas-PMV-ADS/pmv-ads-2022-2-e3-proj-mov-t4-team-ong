import React, { Component } from "react"

import { StyleSheet, TouchableOpacity, View } from "react-native"

import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"

import AsyncStorage from '@react-native-community/async-storage'

import { CommonActions } from '@react-navigation/native';

import axios from 'axios'

import { Text } from "@rneui/themed"

import Icon from "react-native-vector-icons/FontAwesome";

import { Image } from "react-native-elements";
class Menu extends Component {

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: this.props.schema.grey0
            },
            containerHeader: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            containerTitle: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5
            },
            containerItems: {
                flex: 2,
                backgroundColor: this.props.schema.white
            },
            title: {
                color: this.props.schema.white,
                fontSize: 20,
                padding: 5
            },
            logoutIcon: {
                margin: 10
            },

            avatar: {
                width: 80,
                height: 80,
                borderWidth: 3,
                borderRadius: 40,
                borderColor: this.props.schema.grey0,
                margin: 10,
            },
            userInfo: {
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
                alignItems: 'center'
            },
            name: {
                fontSize: 20,
                color: this.props.schema.white,
                marginBottom: 5,
            },
            email: {
                fontSize: 15,
                color: this.props.schema.white,
                marginBottom: 10,
            },
        })

        logout = () => {
            delete axios.defaults.headers.common['Authorization']
            AsyncStorage.removeItem('userData')
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Principal',
                        },
                    ],
                })
            )
        }

        return (
            <DrawerContentScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={logout}>
                        <View style={styles.containerTitle} >
                            <Text style={styles.title}>Vida Sempre Bela</Text>
                            <View style={styles.logoutIcon}>
                                <Icon name='sign-out' size={25} color={this.props.schema.trash} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.containerHeader} >
                        <Image
                            style={styles.avatar}
                            source={this.props.imageURL}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.name}>
                                {this.props.name}
                            </Text>
                            <Text style={styles.email}>
                                {this.props.email}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerItems}>
                        <DrawerItemList {...this.props} schema={this.props.schema} />
                    </View>
                </View>
            </DrawerContentScrollView>
        )
    }
}

export default Menu