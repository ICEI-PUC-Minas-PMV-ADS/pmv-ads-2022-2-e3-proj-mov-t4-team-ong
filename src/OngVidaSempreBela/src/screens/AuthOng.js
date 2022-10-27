import React, { Component } from 'react'
import {
    Alert,
    ImageBackground,
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import authStyle from '../style/authStyle';
import backgroundImageStyle from '../style/backgroundImageStyle';
import btnOutlineStyle from '../style/btnOutlineStyle';
import commonStyles from '../style/commonStyles';
import createImage from '../../assets/imgs/cadastroOVSB.png'
import loginImage from '../../assets/imgs/loginOVSB.png'
import btnInputStyle from '../style/btnInputStyle';
import { TextInput } from 'react-native-paper';

import { server, showError, showSucess} from '../common/common'

class AuthOng extends Component {
    state = {
        nameOng: '',
        emailOng: '',
        passwordOng: '',
        confirmPasswordOng: '',
        stageNew: null
    }

    componentDidMount = () => {
        console.log(' mount', this.props.route.params.stageNew, this.state.stageNew)
        if (this.state.stageNew === null) {
            this.setState({ stageNew: this.props.route.params.stageNew })
        }
    }

    signinOrSignup = () => {
        console.log(' stageNew2', this.props.route.params.stageNew)
        if (this.state.stageNew) {
            Alert.alert('Sucesso!', 'Criar')
        } else {
            Alert.alert('Sucesso!', 'Entrar')
        }
    }
    
    render() {
        console.log('stageNew', this.state.stageNew)
        return (
            <View style={commonStyles.container}>
                <ImageBackground source={
                    this.state.stageNew
                        ? createImage : loginImage}
                    style={backgroundImageStyle.containerImage}>
                </ImageBackground>
                <View style={backgroundImageStyle.containerScreen}>
                    <View style={authStyle.formContainer}>
                        <Text style={authStyle.title}>
                            {this.state.stageNew
                                ? 'Informe os dados da ONG para cadastro:'
                                : 'Informe seus dados para login: '}
                        </Text>
                        {this.state.stageNew &&
                            <View style={btnInputStyle.container}>
                                <Icon name='person' size={25} style={btnInputStyle.icon} />
                                <TextInput
                                    style={[btnInputStyle.input, this.props.style]}
                                    value={this.state.nameOng}
                                    label='Nome da ONG'
                                    onChange={nameOng => this.swtState({ nameOng })}
                                />
                            </View>
                        }
                        <View style={btnInputStyle.container}>
                            <Icon name='at' size={25} style={btnInputStyle.icon} />
                            <TextInput
                                label='E-mail da ONG'
                                value={this.state.emailOng}
                                style={btnInputStyle.input}
                                onChangeText={emailOng => this.setState({ emailOng })}
                            />
                        </View>
                        <View style={btnInputStyle.container}>
                            <Icon name='key' size={25} style={btnInputStyle.icon} />
                            <TextInput
                                label='Senha'
                                value={this.state.passwordOng}
                                style={btnInputStyle.input}
                                onChangeText={passwordOng => this.setState({ passwordOng })}
                                secureTextEntry={true}
                            />
                        </View>
                        {this.state.stageNew &&
                            <View style={btnInputStyle.container}>
                                <Icon name='checkmark' size={25} style={btnInputStyle.icon} />
                                <TextInput
                                    label='Confirmar Senha'
                                    value={this.state.confirmPasswordOng}
                                    style={btnInputStyle.input}
                                    onChangeText={confirmPasswordOng => this.setState({ confirmPasswordOng })}
                                    secureTextEntry={true}
                                />
                            </View>
                        }
                        <TouchableOpacity onPress={this.signinOrSignup}>
                            <View style={btnOutlineStyle.button}>
                                <Text style={btnOutlineStyle.buttonText}  >
                                    {this.state.stageNew ? 'Cadastrar' : 'Entrar'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                            <View style={btnOutlineStyle.linkButton}>
                                <Text style={btnOutlineStyle.buttonText}  >
                                    {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}

export default AuthOng