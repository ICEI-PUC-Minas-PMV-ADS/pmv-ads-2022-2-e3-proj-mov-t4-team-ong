import React, { useContext, useState } from "react";

import { Alert, FlatList, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, ListItem } from "@rneui/themed";
import { useTheme } from "@react-navigation/native";

import UsersContext from "../context.js/UserContext";

const UserList = (props) => {
    const { state, dispatch }  = useContext(UsersContext)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const buttons = [
        {
            element: () => (
                <Icon name='log-in' size={25} color="orange" />
            ),

        },
        {
            element: () => (
                <Icon name='trash' size={25} color="red" />
            ),
        },
    ]

    const { colors } = useTheme()

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário: ' + user.nome, [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não',
                onPress() {
                    console.warn('Não delete')
                }
            }
        ])
    }

    function getUserItem({ item: user }) {


        return (
            <>
                <ListItem
                    key={user.id}
                    bottomDivider
                >
                    <Avatar rounded
                        source={{ uri: user.avatarUrl }}
                        onPress={() => props.navigation.navigate('UserForm')}
                    />
                    <ListItem.Content
                    >
                        <ListItem.Title> {user.nome} </ListItem.Title>
                        <ListItem.Subtitle> {user.email} </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.ButtonGroup
                        onPress={(value) => {
                            setSelectedIndex(value)
                            if (value === 0) {
                                props.navigation.navigate('UserForm', user)
                            } else {
                                confirmUserDeletion(user)
                            }
                        }}
                        seletetIndex={selectedIndex}
                        buttons={buttons}

                    />
                </ListItem>
            </>
        )
    }

    return (
        <View>
            <FlatList
                KeyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

export default UserList