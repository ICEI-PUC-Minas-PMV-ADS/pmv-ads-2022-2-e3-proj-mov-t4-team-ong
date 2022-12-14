import React, { Component } from 'react'

import {
    ImageBackground,
    View,
    Text,
    StyleSheet
} from 'react-native'

import backgroundImage from '../../assets/imgs/logoAjustada.png'

import BtnOutline from '../common/components/BtnOutline'
import commonStyles from '../common/styles/commonStyles'

class HomePage extends Component {

    render() {
        const styles = StyleSheet.create({
            title: {
                padding: 20,
                color: this.props.schema.white,
                marginTop: 150,
                fontSize: 22,
                fontWeight: 'bold',
            },
        })

        return (
            <View style={commonStyles.container}>
                <ImageBackground
                    source={backgroundImage}
                    style={commonStyles.containerBackground}
                >
                    <View style={commonStyles.containerBackground}>
                        <Text style={styles.title}>Bem-vindo(a)!</Text>
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