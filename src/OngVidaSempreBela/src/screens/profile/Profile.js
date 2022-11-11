import axios from 'axios'

import React, { Component } from "react"


import { Text } from "@rneui/themed"

import { ImageBackground, View } from "react-native"

import commonStyles from "../../common/styles/commonStyles"

import createImage from '../../../assets/imgs/cadastroOVSB.png'
import loginImage from '../../../assets/imgs/loginOVSB.png'

import { isValidConfirm, isValidEmail, isValidField, msgError } from "../../common/error/commonMsgError"

import BtnInput from "../../components/btnComponent/BtnInput"
import BtnError from "../../components/btnComponent/BtnError"
import BtnOutline from "../../components/btnComponent/BtnOutline"
import BtnLink from "../../components/btnComponent/BtnLink"

import { server, showError, showSuccess } from "../../common/configuration/common"
import AsyncStorage from '@react-native-community/async-storage'

//import axios from "axios"

const initialState = {
    name: 'Alex de Souza Galdino',
    ongID: 1,
    email: 'alexsgaldino@gmail.com ',
    password: '1234',
    confirmPassword: '1234',
    stageNew: false
}

class Profile extends Component {

    state = {
        ...initialState
    }

    componentDidMount = () => {
        console.log('state2', this.props.route.params.stageNew)
        this.setState({ stageNew: this.props.route.params.stageNew })
    }

    render() {
        console.log('Profile: ', this.props)

        const validations = []

        validations.push(this.state.email && isValidEmail(this.state.email))
        validations.push(this.state.password && isValidField(this.state.password, 4))

        if (this.state.stageNew) {
            validations.push(this.state.name && isValidField(this.state.name, 3))
            validations.push(isValidConfirm(this.state.password, this.state.confirmPassword))
        }

        // Verifica se em cada validations incluída, se alguma for false, 
        // retorna false em validationsFom
        const validationsForm = validations.reduce((arrayFull, arrayAt) => arrayFull && arrayAt)


        signingOrSignup = () => {
            console.log('state2', this.state)
            if (this.state.stageNew) {
                signup()
            } else {
                signin()
            }
        }
        signup = async () => {
            console.log('state3', this.state)
            try {
                await axios.post(`${server}/signup`, {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                })

                showSuccess('Usuário cadastrado!')
                this.setState({ ...initialState })
            } catch (e) {
                showError(e)
            }
        }

        signin = async () => {
            try {
                const res = await axios.post(`${server}/signin`, {
                    email: this.state.email,
                    password: this.state.password
                })

                AsyncStorage.setItem('userData', JSON.stringify(res.data))
                axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`

                this.props.navigation.navigate('Agenda', res.data)

            } catch (e) {
                showError(e)
            }

        }

        return (
            <View style={commonStyles.containerPage}>
                <ImageBackground
                    source={
                        this.state.stageNew
                            ? createImage : loginImage}
                    style={commonStyles.containerImage}
                />
                <View style={commonStyles.containerScreen}>
                    <View style={commonStyles.container}>
                        <Text style={commonStyles.title}>
                            {this.state.stageNew
                                ? 'Informe seus dados para cadastro:'
                                : 'Informe seus dados para login: '}
                        </Text>
                        {
                            this.state.stageNew &&
                            <View>
                                {this.state.name && !isValidField(this.state.name, 3) &&
                                    <BtnError
                                        msgError={msgError('Nome', 'txt', 3)}
                                        schema={this.props.schema}
                                    />
                                }
                                <BtnInput
                                    label='Nome'
                                    icon='user'
                                    value={this.state.name}
                                    onChangeText={name => this.setState({ name: name })}
                                    schema={this.props.schema}
                                />
                            </View>
                        }
                        {
                            this.state.email && !isValidEmail(this.state.email) &&
                            <BtnError
                                msgError={msgError('Email')}
                                schema={this.props.schema}
                            />
                        }
                        <BtnInput
                            label='e-mail'
                            icon='at'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email: email })}
                            schema={this.props.schema}
                        />
                        {
                            this.state.password && !isValidField(this.state.password, 4) &&
                            <BtnError
                                msgError={msgError('Senha', 'txt', 4)}
                                schema={this.props.schema}
                            />
                        }
                        <BtnInput
                            label='Senha'
                            icon='lock'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password: password })}
                            secureTextEntry={true}
                            schema={this.props.schema}
                        />
                        {
                            this.state.stageNew &&
                            <View>
                                {
                                    !isValidConfirm(this.state.password, this.state.confirmPassword) &&
                                    <BtnError
                                        msgError={msgError('Confirmar Senha')}
                                        schema={this.props.schema}
                                    />
                                }
                                <BtnInput
                                    label='Confirmar Senha'
                                    icon='check'
                                    value={this.state.confirmPassword}
                                    onChangeText={(confirmPassword) => this.setState({ confirmPassword: confirmPassword })}
                                    secureTextEntry={true}
                                    schema={this.props.schema}
                                />
                            </View>
                        }
                        <BtnOutline
                            disabled={!validationsForm}
                            onPress={signingOrSignup}
                            title={this.state.stageNew ? 'Cadastrar' : 'Entrar'}
                            schema={this.props.schema}
                        />
                        <BtnLink
                            onPress={() => this.setState({ stageNew: !this.state.stageNew })}
                            title={this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                            schema={this.props.schema}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Profile