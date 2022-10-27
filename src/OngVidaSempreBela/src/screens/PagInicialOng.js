import React from 'react';
import { TouchableOpacity, View, StyleSheet, FlatList, Image } from 'react-native';
import { Button, Text, List, Avatar } from 'react-native-paper';

import commonStyles from "../style/commonStyles";

const DATA = [
    {
        id: 1,
        title: 'projeto1',
    },
    {
        id: 2,
        title: 'projeto2',
    },
    {
        id: 3,
        title: 'projeto3',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <View>
            <Image

                source={require("../../assets/imgs/randomDog.jpg")}

                style={{ width: 65, height: 65, borderRadius: 65 / 2 }}

            />
        </View>
        <Text style={styles.nomeProjeto}>{title}</Text>
    </View>
);

const PagInicialOng = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.projetosVinculados}>
                <Text style={styles.titulo}>Projetos Vinculados</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.containerActions}>
                <Button mode="contained" style={styles.button} onPress={() => console.log('Pressed')}>
                    Cadastrar Projeto
                </Button>
                <Button mode="contained" style={styles.button} onPress={() => console.log('Pressed')}>
                    Fotos
                </Button>
                <Button mode="contained" style={styles.button} onPress={() => console.log('Pressed')}>
                    Acessar Perfil
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    projetosVinculados: {
        flex: 2,
    },
    containerActions: {
        flex: 4
    },
    button: {
        marginBottom: 8
    },
    titulo: {
        color: commonStyles.txtColor,
        fontWeight: 'bold',
        fontSize: 20,
    },
    item: {
        height: 50,
        width: 50,
        margin: 15,
    },
    title: {
        fontSize: 20,
    },
    nomeProjeto: {
        fontSize: 12,
        color: commonStyles.txtColor,
        textAlign: 'center'
    },
})

export default PagInicialOng;