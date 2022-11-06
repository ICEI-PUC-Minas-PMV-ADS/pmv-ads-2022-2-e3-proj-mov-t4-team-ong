import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
    state = {
        array: []
    }

    array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    gerarOngs = () => {
        const lista = array
        return lista.map(n => {
            return <View style={styles.items}>
                <Text style={styles.itemsText}>Ong {n}</Text>
            </View>
        })

}
}

const styles = StyleSheet.create({
    items: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    },
    itemsText: {
        flex: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 50,
        height: 50,
    }
});