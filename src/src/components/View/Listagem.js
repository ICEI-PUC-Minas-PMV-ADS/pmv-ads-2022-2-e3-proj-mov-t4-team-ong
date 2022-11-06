import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Button
} from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Input from "../BtnInput";

export default () => {

    const navigation = useNavigation(); 

    state = {
        array: []
    }

    array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    gerarOngs = () => {
        const lista = array
        return lista.map(n => {
            return <View key={n} style={styles.items}>
                <Text style={styles.itemsText}>Ong {n}</Text>
                <Button color='#38F' title="Ver" onPress={() => navigation.navigate('PerfilOng')} />
            </View>
        })

    }




    const [text, onChangeText] = useState("Buscar Ongs");

    return (
        <ScrollView style={styles.Wrap}>

            <Image
                // source={require('../outros/fonteAlex/assets/imgs/ong-task-list.png')}
                source={require('../outros/fonteAlex/assets/imgs/logo.png')}
                style={{ width: '100%', height: 200 }}
            />
            <View style={styles.input}>
                <Input
                    placeholder="Buscar ONGs"
                />
            </View>

            <View>
                <Text style={styles.sub}>Ongs Parceiras</Text>

                <View style={styles.loadContainer}>
                    {/* <MultiplosLoads /> */}
                    {gerarOngs()}
                </View>
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
    inputContainer: {
        flex: 1,
        width: '90%'
    },
    input: {
        margin: 10
    },
    sub: {
        flex: 1,
        alignSelf: 'center',
        margin: 10,
        fontSize: 36,
        color: 'white'
    },
    loadContainer: {
        flex: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    items: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        margin: 10
    },
    itemsText: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    }
});