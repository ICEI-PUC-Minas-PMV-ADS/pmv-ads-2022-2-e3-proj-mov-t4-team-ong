import React, { Component } from "react";

import { Card, Text } from "@rneui/themed";

import {
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

import moment from "moment";
import 'moment/locale/pt-br'
import commonStyles from "../../common/styles/commonStyles";

class Ong extends Component {

    render() {

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'row',
                margin: 4,
                padding: 0,
                width: '100%'
            },
            text: {
                color: this.props.schema.primary,
            },
            subtitle: {
                color: this.props.schema.primary,
            },
            title: {
                color: this.props.schema.black,
                fontSize: 24,
                fontWeight: 'bold',
            },
        })

        const formattedDate = moment(this.props.createAt)
            .locale('pt-br')
            .format('DD/MM/YYYY')

        return (
            <View style={commonStyles.container}>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Projetos',
                        { ...this.props, ongId: this.props.id, nomeOng: this.props.nameExtended })}
                >
                    <Card >
                        <Card.Title style={styles.title}>{this.props.nameExtended}</Card.Title>
                        <Card.Divider />
                        <Card.FeaturedTitle style={styles.subtitle}>{this.props.name}</Card.FeaturedTitle>
                        <Card.FeaturedSubtitle style={styles.text}>Fundação: {formattedDate}</Card.FeaturedSubtitle>
                    </Card>
                </TouchableOpacity>
            </View >
        )
    }
}

export default Ong