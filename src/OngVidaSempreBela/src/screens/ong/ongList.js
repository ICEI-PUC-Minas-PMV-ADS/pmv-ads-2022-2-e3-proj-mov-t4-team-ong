import React, { Component } from "react"

import { SearchBar, Text } from "@rneui/themed"

import axios from "axios"

import { FlatList, StyleSheet, View } from "react-native"

import { server, showError } from "../../common/configuration/common"

import commonStyles from "../../common/styles/commonStyles"

import Ong from "../../common/components/Ong"

initialState = {
    args: '',
    ongs: [],
    filterOngs: []
}

class OngList extends Component {
    state = {
        ...initialState
    }

    componentDidMount = () => {
        this.loadOngs()
    }

    loadOngs = async () => {
        try {
            const res = await axios.get(`${server}/ongs`)
            this.setState({ ongs: res.data }, this.filterOngs)
        } catch (e) {
            showError(e)
        }
    }

    filterOngs = (args) => {
        let filterOngs = null
        if (args) {
            const pending = ongs => ongs.nameExtended.includes(args)
            filterOngs = this.state.ongs.filter(pending)
        } else {
            filterOngs = [...this.state.ongs]
        }

        this.setState({ filterOngs })
    }

    render() {

        console.log("Ongs")

        styles = StyleSheet.create({
            wrap: {
                backgroundColor: this.props.schema.screenBackground
            },
            inputContainer: {
                flex: 1,
                width: '90%'
            },
            input: {
                margin: 10
            },
            sub: {
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
                fontWeight: 'bold',
                color: this.props.schema.white
            },
            itemsBtn: {
                borderRadius: 1,
                margin: 10
            }
        });

        return (
            <View style={[commonStyles.container, styles.wrap]}>

                <View>
                    <Text style={styles.sub}>Ongs Parceiras</Text>

                    <SearchBar
                        placeholder="Encontre sua ong"
                        value={this.state.args}
                        onChangeText={args => this.setState({ args }, this.filterOngs(args))}
                        round={true}
                    />

                    <FlatList
                        data={this.state.filterOngs}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Ong
                            {...this.props}
                            {...item}
                            schema={this.props.schema}
                        />}
                    />
                </View>
            </View>
        )
    }
}

export default OngList