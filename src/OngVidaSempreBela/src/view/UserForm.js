import React, { useContext, useState } from "react";
import { View } from "react-native";
import ButtonOutline from "../components/btns/btnOutline";
import UsersContext from "../context.js/UserContext";

const UserForm = (props) => {
    
    const [user, setUser] = useState(props.route.params ? props.route.params : [])
    const { dispatch } = useContext(UsersContext)

    return (
        <View>
            {/*            <TextInput   
                label="Nome"
                onChangeText={nome => setUser({ ...user, nome })}
                value={user.nome}
            />
            <TextInput
                label="e-mail"
                onChangeText={email => setUser({ ...user, email })}
                value={user.email}
            />
            <TextInput
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
            /> */}
        </View>
    )
}

export default UserForm