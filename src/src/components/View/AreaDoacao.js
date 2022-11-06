import React from "react";
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Input from "../BtnInput";
import Btn from "../BtnOutline";

export default () => {

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.Wrap}>

            <Image
                // source={require('../outros/fonteAlex/assets/imgs/ong-task-list.png')}
                source={require('../outros/fonteAlex/assets/imgs/logo.png')}
                style={{ width: '100%', height: 200 }}
            />

            <View>
                <Text style={styles.TextoG}>Obrigado por contribuir</Text>
            </View>

            <View style={styles.Views}>
                <Text style={styles.Texto}>Informe o valor da doação</Text>
                <Input placeholder="R$" 
                keyboardType="numeric"
                />
            </View>

            <View style={styles.Views}>
                <Text style={styles.Texto}>Como deseja realizar a doação ?</Text>
                <Btn title="PIX" />
                <Btn title="BOLETO" />
                <Btn title="DONATIVOS" />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black'
    },
    Views: {
        margin: 20,
    },
    TextoG: {
        color: 'white',
        fontSize: 24,
        alignSelf: 'center'
    },
    Texto: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    Btn: {
        fontSize: 18,
    }
});