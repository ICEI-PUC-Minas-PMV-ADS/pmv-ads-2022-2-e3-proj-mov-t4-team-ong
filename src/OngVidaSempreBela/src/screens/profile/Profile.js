import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import axios from 'axios'

import { server, showError, showSuccess } from '../../common/common'

import BtnOutline from '../../components/btnComponent/BtnOutline';
import BtnInput from '../../components/btnComponent/BtnInput';
import BtnLink from '../../components/btnComponent/BtnLink'

import createImage from '../../../assets/imgs/newProfile.png'
import loginImage from '../../../assets/imgs/login.png'
import updateImage from '../../../assets/imgs/updateProfile.png'

import commonStyles from '../../styles/commonStyles';
import { isValidConfirmPassword, isValidEmail, isValidName, isValidPassword } from '../../validator/validator'

import themeContext from "../../contexts/themeContext";

const theme = themeContext;

const initialState = {
    name: '',
    email: 'alexsgaldino@gmail.com ',
    password: '1234',
    confirmPassword: '',
    stageNew: false,
    getUserUpdate: false,
    anonimo: false,
}

class Profile extends Component {
    state = {
        ...initialState
    }

    componentDidMount = () => {
        this.setState({ stageNew: this.props.stageNew })
    }

    loadProfile = async () => {
        console.log('loadProfile')
        try {
            const res = await axios.get(`${server}/user/${this.state.email}`)
            const [local] = res.data
            this.setState({
                name: local.name,
                email: local.email,
                password: local.name === 'Anônimo' ? 'anonimo' : '',
                confirmPassword: local.name === 'Anônimo' ? 'anonimo' : '',
                getUserUpdate: true,
                anonimo: local.name === 'Anônimo' ? true : false 
            })
            console.log('state get ', this.state)

        } catch (e) {
            showError(e)
        }
    }

    signingOrSignup = () => {
        console.log('state2', this.state)
        if (this.state.stageNew === null) {
            this.updateUser()
        } else if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    updateUser = async () => {
        console.log('update', this.state)
        try {
            await axios.put(`${server}/user/${this.state.email}`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            })

            showSuccess('Usuário Atualizado!')
        } catch (e) {
            showError(e)
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

            console.log ('sign: ', res.data)
            this.props.navigation.navigate('HomePage', res.data)

        } catch (error) {
            showError('Usuário ou senha inválido!')
        }

    }

    getImage = () => {
        switch (this.state.stageNew) {
            case true: return createImage
            case false: return loginImage
            case null: return updateImage
            default: return loginImage
        }
    }

    getTitle = () => {
        switch (this.state.stageNew) {
            case true: return 'Informe seus dados para cadastro:'
            case false: return 'Informe seus dados para login: '
            case null: return 'Informe seus dados para atualizar: '
            default: return 'Informe seus dados para login: '
        }
    }

    getAction = () => {
        switch (this.state.stageNew) {
            case true: return 'Cadastrar'
            case false: return 'Entrar'
            case null: return 'Atualizar'
            default: return 'Entrar'
        }
    }

    render() {
        if (!this.state.getUserUpdate) {
            if (this.state.stageNew === null) {
                this.loadProfile()
            }
        }

        const validations = []

        validations.push(isValidEmail(this.state.email))
        validations.push(isValidPassword(this.state.password))

        if (this.state.stageNew || this.state.stageNew === null) {
            validations.push(isValidName(this.state.name))
            validations.push(this.state.confirmPassword)
            validations.push(isValidConfirmPassword(this.state.password, this.state.confirmPassword))
        }

        // Verifica se em cada validations incluída, se alguma for false,
        // retorna false em validationsFom
        const validationsForm = validations.reduce((arrayFull, arrayAt) => arrayFull && arrayAt)

        return (
            <View style={commonStyles.containerPage}>
                <ImageBackground
                    source={this.getImage()}
                    style={commonStyles.containerImage}
                >
                </ImageBackground>
                <View style={commonStyles.containerScreen}>
                    <View style={commonStyles.ContainerForm}>
                        <Text style={commonStyles.titleForm}>
                            {this.getTitle()}
                        </Text>
                        {(this.state.stageNew || this.state.stageNew === null) &&
                            <View>
                                <BtnInput
                                    error={!isValidName(this.state.name)}
                                    label='Nome'
                                    icon='user'
                                    value={this.state.name}
                                    onChangeText={name => {
                                        this.setState({ name: name })
                                    }}
                                    disabled={this.state.anonimo ? true : false}
                                />
                                {!isValidName(this.state.name) &&
                                    <View style={commonStyles.containerError}>
                                        <Text style={commonStyles.txtError}>
                                            Nome deverá conter no mínimo 3 caracteres!
                                        </Text>
                                    </View>
                                }
                            </View>
                        }
                        <BtnInput
                            error={!isValidEmail(this.state.email)}
                            label='e-mail'
                            icon='at'
                            value={this.state.email}
                            disabled={this.state.stageNew === null ? true : false}
                            onChangeText={email => this.setState({ email: email })}
                        />
                        {!isValidEmail(this.state.email) &&
                            <View style={commonStyles.containerError}>
                                <Text style={commonStyles.txtError}>
                                    e-mail inválido!
                                </Text>
                            </View>
                        }
                        <BtnInput
                            error={!isValidPassword(this.state.password)}
                            label='Senha'
                            icon='lock'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password: password })}
                            secureTextEntry={true}
                            disabled={this.state.anonimo ? true : false}
                        />
                        {!isValidPassword(this.state.password) &&
                            <View style={commonStyles.containerError}>
                                <Text style={commonStyles.txtError}>
                                    Password deverá conter no mínimo 4 caracteres!
                                </Text>
                            </View>
                        }
                        {(this.state.stageNew || this.state.stageNew === null) &&
                            <View>
                                <BtnInput
                                    error={!isValidConfirmPassword(this.state.password, this.state.confirmPassword)}
                                    label='Confirmar Senha'
                                    icon='check'
                                    value={this.state.confirmPassword}
                                    onChangeText={(confirmPassword) => this.setState({ confirmPassword: confirmPassword })}
                                    secureTextEntry={true}
                                    disabled={this.state.anonimo ? true : false}
                                />
                                {!isValidConfirmPassword(this.state.password, this.state.confirmPassword) &&
                                    <View style={commonStyles.containerError}>
                                        <Text style={commonStyles.txtError}>
                                            Confirmar e senha devem ser iguais!
                                        </Text>
                                    </View>
                                }
                            </View>
                        }
                        <BtnOutline
                            disabled={!validationsForm || this.state.anonimo}
                            onPress={this.signingOrSignup}
                            title={this.getAction()}
                        />
                        {(!this.state.stageNew && this.state.stageNew !== null) &&
                            <BtnLink
                            onPress={() => {
                                this.setState({ email: "anonimo@anonimo.br", password: "anonimo"})
                            }}
                                title="Entrar como Anônimo"
                            />
                        }
                    </View>
                </View>
            </View>

        )
    }
}

export default Profile