import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    ScrollView
} from "react-native";
import { Button } from "react-native-paper";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BtnOutline from "../BtnOutline";
import BtnLink from "../BtnLink";


export default () => {

    const navigation = useNavigation(); 

    state = {
        array: []
    }

    array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return(
        <ScrollView>
            <View>
                <Text>Perfil da Ong MAY THE FORCE BE WITH YOU</Text>
            </View>

            <View>
                <Text>Projetos da Ong</Text>
            </View>

            <View>
                <Text>Meta de Arrecadação:</Text>
            </View>

            <BtnLink 
            title="DOAR"
            onPress={() => navigation.navigate('AreaDoacao')} 
            />
            <BtnLink title="FOTOS" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Wrap: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black'
    }
});