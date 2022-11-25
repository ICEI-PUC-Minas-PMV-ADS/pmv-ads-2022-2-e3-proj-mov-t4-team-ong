import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Button
} from "react-native";

import { showError } from "../../common/configuration/common";
import axios from "axios";


initialState = {
    ongs: []
}

export default class OngList extends Component() {

    state = {
        ...initialState
    }

    componentDidMount = () => {
        this.loadOngs()
    }

    loadOngs = async () => {
        try {
            const res = await axios.get(`${server}/ongs`)
            this.setState({ ongs: res.data })
        } catch (e) {
            showError(e)
        }
    }

    render() {

        styles = StyleSheet.create({
            Wrap: {
                flex: 1,
                width: '100%',
                backgroundColor: '#393534'
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
                fontWeight: 'bold',
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
                fontWeight: 'bold'
            },
            itemsBtn: {
                borderRadius: 1,
                margin: 10
            }
        });

        return (
            <ScrollView style={styles.Wrap}>

                <View>
                    <Text style={styles.sub}>Ongs Parceiras</Text>

                    <FlatList
                        data={this.state.ongs}
                        keyExtractor={ong => `${ong.id}`}
                        renderItem={({ ong }) => {
                            <View style={styles.items}>
                                <Text style={styles.itemsText}>{ong.nameExtended}</Text>
                                <View style={styles.itemsBtn}>
                                    //<Button color='darkred' title="Ver" onPress={() => navigation.navigate('PerfilOng')} />
                                </View>
                            </View>
                        }
                        }
                    />
                </View>

            </ScrollView>
        )
    }

}
// gerarOngs = () => {
//     const lista = array
//     return lista.map(n => {
//         return <View key={n} style={styles.items}>
//             <Text style={styles.itemsText}>ONG {n}</Text>
//             <View style={styles.itemsBtn}>
//                 <Button color='darkred' title="Ver" onPress={() => navigation.navigate('PerfilOng')} />
//             </View>
//         </View>
//     })

// }