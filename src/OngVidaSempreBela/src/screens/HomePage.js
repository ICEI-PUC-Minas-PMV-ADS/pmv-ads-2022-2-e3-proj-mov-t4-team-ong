import React, { Component, useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Text} from 'react-native-paper';

import backgroundImage from '../../assets/imgs/logoOVSB.png'
import homePageStyle from '../style/homePageStyle'
import btnOutileStyle from '../style/btnOutlineStyle';

class HomePage extends Component {
    
    state = {
    }
    
    render() {
        return (
            
            <ImageBackground
                source={backgroundImage}
                style={homePageStyle.background}
            >

                <View style={homePageStyle.background}>
                    <Text style={homePageStyle.title}>Bem-vindo!</Text>
                    <View>
                        <TouchableOpacity
                            //style={btnOutileStyle.container}
                            //onPress={() => Alert.alert('Função não disponível')}
                            onPress={() => this.props.navigation.navigate('CadastroOng',
                            { stageNew: true })}
                        >
                            <View style={btnOutileStyle.button}>
                                <Text style={btnOutileStyle.buttonText}  >
                                    Quero cadastrar minha ONG
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Cadastro',
                                { stageNew: true })}
                        >
                            <View style={btnOutileStyle.button}>
                                <Text style={btnOutileStyle.buttonText}  >
                                    Quero me cadastrar
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login',
                                { stageNew: false })}
                        >
                            <View style={btnOutileStyle.button}>
                                <Text style={btnOutileStyle.buttonText}  >
                                    Quero entrar
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={btnOutileStyle.button}>
                                <Text style={btnOutileStyle.buttonText}  >
                                    Quero doar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default HomePage
