import React, { Component } from 'react'

import { ImageBackground, View, Text, StyleSheet } from 'react-native'

import commonStyles from '../common/styles/commonStyles'
import backgroundImage from '../../assets/imgs/logoOVSB.png'
import BtnOutline from '../components/btnComponent/BtnOutline'


class HomePage extends Component {

    render() {
        console.log('HomePage: ', this.props)

        const styles = StyleSheet.create({
            title: {
                padding: 20,
                color: this.props.schema.white,
                marginTop: 150,
                fontSize: 30,
                fontWeight: 'bold',
            },
        })

        return (
            <View style={commonStyles.containerPage}>
                <ImageBackground
                    source={backgroundImage}
                    style={commonStyles.background}
                >
                    <View style={commonStyles.background}>
                        <Text style={styles.title}>Bem Vindo!!!</Text>
                        <View>
                            <BtnOutline
                                schema={this.props.schema}
                                onPress={() => this.props.navigation.navigate('Entrar',
                                    { stageNew: false })}
                                title='Já sou cadastrado'
                            />
                            <BtnOutline
                                schema={this.props.schema}
                                onPress={() => this.props.navigation.navigate('Cadastro',
                                    { stageNew: true })}
                                title='Quero me cadastrar'
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default HomePage