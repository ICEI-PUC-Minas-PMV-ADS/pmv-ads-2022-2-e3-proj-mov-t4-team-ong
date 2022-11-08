import React, { Component } from 'react';
import { Alert, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

import backgroundImage from '../../assets/imgs/logoOVSB.png'
import homePageStyle from '../styles/homePageStyle'
import BtnOutline from '../components/btnComponent/BtnOutline';
import commonStyles from '../styles/commonStyles';

class HomePage extends Component {
    render() {
        console.log('HomePage: ')
        return (
            <View style={commonStyles.containerPage}>
                <ImageBackground
                    source={backgroundImage}
                    style={homePageStyle.background}
                >
                    <View style={homePageStyle.background}>
                        <View style={homePageStyle.iconAlign}>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                                <Icon
                                    name='bars'
                                    style={commonStyles.iconImage}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={homePageStyle.title}>Bem Vindo!!!</Text>
                        <View>
                            <BtnOutline
                                onPress={() => Alert.alert('Função não disponível')}
                                title=' Quero cadastrar minha ONG'
                            />
                            <BtnOutline
                                onPress={() => this.props.navigation.navigate('Cadastro',
                                    { stageNew: true })}
                                title='Quero me cadastrar'
                            />
                            <BtnOutline
                                onPress={() => this.props.navigation.navigate('Login',
                                    { stageNew: false })}
                                title='Quero entrar'
                            />
                            <BtnOutline
                                onPress={() => Alert.alert('Função não disponível')}
                                title='Quero doar'
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default HomePage
