import React, { useContext, useState } from "react";
import { View } from "react-native";
import ButtonOutline from "../components/button/ButtonOutline";
import Input from "../components/TextInput/Input";
import UsersContext from "../context.js/UserContext";

const UserForm = (props) => {
    
    const [user, setUser] = useState(props.route.params ? props.route.params : [])
    const { dispatch } = useContext(UsersContext)

    return (
        <View>
            <Input
                label="Nome"
                onChangeText={nome => setUser({ ...user, nome })}
                value={user.nome}
            />
            <Input
                label="e-mail"
                onChangeText={email => setUser({ ...user, email })}
                value={user.email}
            />
            <Input
                label="URL Avatar"
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                value={user.avatarUrl}
            />
            <ButtonOutline
                funcao="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    props.navigation.goBack()
                }}
            />
        </View>
    )
}

export default UserForm