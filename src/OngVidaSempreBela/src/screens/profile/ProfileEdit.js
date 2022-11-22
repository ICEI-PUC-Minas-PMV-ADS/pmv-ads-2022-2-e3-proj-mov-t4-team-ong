import React, { Component } from "react"

import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    View
} from "react-native"

import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker'

import axios from 'axios'

import { Text } from "@rneui/themed"

import commonStyles from "../../common/styles/commonStyles"

import {
    isValidConfirm,
    isValidField,
    msgError
} from "../../common/error/commonMsgError"

import BtnInput from "../../components/btnComponent/BtnInput"
import BtnOutline from "../../components/btnComponent/BtnOutline"
import editImage from "../../../assets/imgs/editOVSB.png"

import { server, showError, showSuccess } from "../../common/configuration/common"

import AsyncStorage from '@react-native-community/async-storage'

import { Image } from "react-native-elements"

const initialState = {
    name: '',
    imageURL: null,
    email: '',
    password: '',
    confirmPassword: ''
}

class ProfileEdit extends Component {

    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const userData = await AsyncStorage.getItem('userData')
        const savedState = JSON.parse(userData) || initialState
        this.setState({
            ...savedState
        })
    }

    pickLibraryImage = async (response) => {
        const options = {
            title: 'Escolha a imagem',
            storageOptions: {
                skipBackup: true,
                noData: true,
                allowsEditing: true,
                mediaTypes: 'photo',
                path: 'images'
            }
        };

        await launchImageLibrary(options, (response) => {
            if (!response.didCancel) {
                const { assets } = response;
                const [source] = assets
                this.setState({
                    imageURL: { uri: source.uri },
                });
            }
        });
    }

    pickCameraImage = async (response) => {
        const options = {
            title: 'Escolha a imagem',
            storageOptions: {
                skipBackup: true,
                noData: true,
                allowsEditing: true,
                mediaTypes: 'photo',
                path: 'images'
            }
        };

        await launchCamera(options, (response) => {
            const { assets } = response;
            const [source] = assets

            if (!response.didCancel) {
                this.setState({
                    imageURL: { uri: source.uri },
                });
            }
        });
    }

    render() {

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center'
            },
            containerScreen: {
                flex: 2,
                height: '100%',
                width: '100%',
                backgroundColor: this.props.schema.screenBackground,
                paddingHorizontal: 10,
                paddingBottom: 10
            },
            title: {
                color: this.props.schema.success,
            },
            containerImage: {
                width: '40%',
                height: Dimensions.get('window').width * 3 / 9,
                backgroundColor: '#EEE',
                marginTop: 10,
                borderRadius: 50,
            },
            containerButtons: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            image: {
                width: '100%',
                height: Dimensions.get('window').width * 3 / 9,
                borderRadius: 50,
                resizeMode: 'center'
            },
            containerButton: {
                marginHorizontal: 10
            },
            button: {
                backgroundColor: 'red',
                padding: 10
            },
            textEmail: {
                color: this.props.schema.white,
                fontWeight: 'bold'
            }
        })

        const validations = []

        validations.push(this.state.name && isValidField(this.state.name, 3))
        validations.push(this.state.password && isValidField(this.state.password, 4))
        validations.push(isValidConfirm(this.state.password, this.state.confirmPassword))

        // Verifica se em cada validations incluída, se alguma for false, 
        // retorna false em validationsFom
        const validationsForm = validations.reduce((arrayFull, arrayAt) => arrayFull && arrayAt)

        save = async () => {
            try {
                await axios.put(`${server}/users`, {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    imageURL: this.state.imageURL
                })

                const res = await axios.post(`${server}/signin`, {
                    email: this.state.email,
                    password: this.state.password
                })

                AsyncStorage.setItem('userData', JSON.stringify(res.data))
                axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`

                showSuccess('Usuário atualizado')
            } catch (e) {
                showError(e)
            }
        }

        return (
            <ScrollView >
                <ImageBackground
                    source={editImage}
                    style={commonStyles.container}
                >
                    <View style={[styles.container]}>
                        <View style={styles.containerImage}>
                            <Image source={this.state.imageURL} style={styles.image} />
                        </View>
                        <View style={styles.textEmail}>
                            <Text style={styles.textEmail}>{this.state.email}</Text>
                        </View>
                        <View style={styles.containerButtons}>
                            <BtnOutline
                                onPress={this.pickLibraryImage}
                                title='Escolha sua foto'
                                schema={this.props.schema}
                                bg={this.props.schema.edit}
                            />
                            <BtnOutline
                                onPress={this.pickCameraImage}
                                title='Tire uma foto'
                                schema={this.props.schema}
                                bg={this.props.schema.edit}
                            />
                        </View>

                    </View>
                </ImageBackground>
                <View style={styles.containerScreen}>
                    <Text style={[commonStyles.title, styles.title]}>
                        Dados da conta
                    </Text>
                    <BtnInput
                        label='Nome'
                        icon='user'
                        value={this.state.name}
                        onChangeText={name => this.setState({ name: name })}
                        schema={this.props.schema}
                        errorMessage={this.state.name && !isValidField(this.state.name, 3) ? msgError('txt', 3) : ''}
                        error={!isValidField(this.state.name, 3)}
                        bg={this.props.schema.edit}
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
                        bg={this.props.schema.edit}
                    />
                    <BtnInput
                        label='Confirmar Senha'
                        icon='check'
                        value={this.state.confirmPassword}
                        onChangeText={(confirmPassword) => this.setState({ confirmPassword: confirmPassword })}
                        secureTextEntry={true}
                        schema={this.props.schema}
                        errorMessage={!isValidConfirm(this.state.password, this.state.confirmPassword) ? msgError() : ''}
                        error={!isValidConfirm(this.state.password, this.state.confirmPassword)}
                        bg={this.props.schema.edit}
                    />
                    <View style={styles.containerButton}>
                        <BtnOutline
                            disabled={!validationsForm}
                            onPress={save}
                            title='Salvar'
                            schema={this.props.schema}
                        />
                    </View>
                </View>
            </ScrollView >
        )
    }
}

export default ProfileEdit