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

import createImage from '../../../assets/imgs/newProfile.png'
import loginImage from '../../../assets/imgs/login.png'
import updateImage from '../../../assets/imgs/updateProfile.png'

import commonStyles from '../../styles/commonStyles';

const initialState = {
    name: '',
    email: 'alexsgaldino@gmail.com ',
    password: '1234',
    confirmPassword: '',
    stageNew: false,
    getUserUpdate: false,

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
            this.setState({ name: local.name, email: local.email})
            this.setState({ getUserUpdate: true })
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

            this.props.navigation.navigate('HomePage', res.data)

        } catch (error) {
            showError(e)
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

        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 4)

        if (this.state.stageNew || this.state.stageNew === null) {
            validations.push(this.state.name && this.state.name.trim().length >= 3)
            validations.push(this.state.confirmPassword)
            validations.push(this.state.password === this.state.confirmPassword)
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
                            <BtnInput
                                label='Nome'
                                icon='user'
                                value={this.state.name}
                                onChangeText={name => this.setState({ name: name })}
                            />
                        }
                        <BtnInput
                            label='e-mail'
                            icon='at'
                            value={this.state.email}
                            disabled={this.state.stageNew === null ? true : false}
                            onChangeText={email => this.setState({ email: email })}
                        />
                        <BtnInput
                            label='Senha'
                            icon='lock'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password: password })}
                            secureTextEntry={true}
                        />
                        {(this.state.stageNew || this.state.stageNew === null) &&
                            <BtnInput
                                label='Confirmar Senha'
                                icon='check'
                                value={this.state.confirmPassword}
                                onChangeText={(confirmPassword) => this.setState({ confirmPassword: confirmPassword })}
                                secureTextEntry={true}
                            />
                        }
                        <BtnOutline
                            disabled={!validationsForm}
                            onPress={this.signingOrSignup}
                            title={this.getAction()}
                        />
                    </View>
                </View>
            </View>

        )
    }
}

export default Profile