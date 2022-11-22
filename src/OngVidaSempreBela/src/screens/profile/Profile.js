import React, { Component } from "react"

import axios from 'axios'

import { Text } from "@rneui/themed"

import {
    ImageBackground,
    StyleSheet,
    View
} from "react-native"

import commonStyles from "../../common/styles/commonStyles"

import createImage from '../../../assets/imgs/cadastroOVSB.png'
import loginImage from '../../../assets/imgs/loginOVSB.png'

import {
    isValidConfirm,
    isValidEmail,
    isValidField,
    msgError
} from "../../common/error/commonMsgError"

import BtnInput from "../../components/btnComponent/BtnInput"
import BtnOutline from "../../components/btnComponent/BtnOutline"
import BtnLink from "../../components/btnComponent/BtnLink"

import { server, showError, showSuccess } from "../../common/configuration/common"

import AsyncStorage from '@react-native-community/async-storage'

const initialState = {
    name: '',
    ongID: 1,
    email: '',
    password: '',
    confirmPassword: '',
    imageURL: '',
    stageNew: false
}

class Profile extends Component {

    state = {
        ...initialState
    }

    componentDidMount = () => {
        this.setState({ stageNew: this.props.route.params.stageNew })
    }

    render() {
        const styles = StyleSheet.create({
            containerScreen: {
                backgroundColor: this.props.schema.screenBackground
            },
            containerButtons: {
                marginHorizontal: 10
            },
            title: {
                color: this.props.schema.white
            },
            btn: {
                marginHorizontal: 10
            }
        })

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
            if (this.state.stageNew) {
                signup()
            } else {
                signin()
            }
        }

        signup = async () => {
            try {
                await axios.post(`${server}/signup`, {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                    imageURL: this.state.imageURL
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
            <View style={commonStyles.container}>
                <View style={commonStyles.containerImage}>
                    <ImageBackground
                        source={
                            this.state.stageNew
                                ? createImage : loginImage}
                        style={commonStyles.container}
                    />
                </View>
                <View
                    style={[commonStyles.containerScreen, styles.containerScreen]}
                >
                    <View style={commonStyles.textAlign}>
                        <Text style={[commonStyles.title, styles.title]}>
                            {this.state.stageNew
                                ? 'Informe seus dados para cadastro:'
                                : 'Informe seus dados para login: '}
                        </Text>

                    </View>
                    {
                        this.state.stageNew &&
                        <BtnInput
                            label='Nome'
                            icon='user'
                            value={this.state.name}
                            onChangeText={name => this.setState({ name: name })}
                            schema={this.props.schema}
                            errorMessage={this.state.name && !isValidField(this.state.name, 3) ? msgError('txt', 3) : ''}
                            error={!isValidField(this.state.name, 3)}
                            bg={this.state.stageNew
                                ? this.props.schema.primary
                                : this.props.schema.grey3}
                        />
                    }
                    <BtnInput
                        label='e-mail'
                        icon='at'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                        schema={this.props.schema}
                        errorMessage={this.state.email && !isValidEmail(this.state.email) ? msgError() : ''}
                        error={!isValidEmail(this.state.email)}
                        bg={this.state.stageNew
                            ? this.props.schema.primary
                            : this.props.schema.grey3}
                    />
                    <BtnInput
                        label='Senha'
                        icon='lock'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password: password })}
                        secureTextEntry={true}
                        schema={this.props.schema}
                        errorMessage={this.state.password && !isValidField(this.state.password, 4) ? msgError('txt', 4) : ''}
                        error={!isValidField(this.state.password, 4)}
                        bg={this.state.stageNew
                            ? this.props.schema.primary
                            : this.props.schema.grey3}
                    />
                    {
                        this.state.stageNew &&
                        <BtnInput
                            label='Confirmar Senha'
                            icon='check'
                            value={this.state.confirmPassword}
                            onChangeText={(confirmPassword) => this.setState({ confirmPassword: confirmPassword })}
                            secureTextEntry={true}
                            schema={this.props.schema}
                            errorMessage={!isValidConfirm(this.state.password, this.state.confirmPassword) ? msgError() : ''}
                            error={!isValidConfirm(this.state.password, this.state.confirmPassword)}
                            bg={this.state.stageNew
                                ? this.props.schema.primary
                                : this.props.schema.grey3}
                        />
                    }
                    <View style={styles.btn}>
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