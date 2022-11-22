import React, { Component } from "react";

import { Text } from "@rneui/themed";

import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import moment from "moment";
import 'moment/locale/pt-br'

import Icon from "react-native-vector-icons/FontAwesome";

class Reminder extends Component {

    render() {

        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                borderColor: this.props.schema.grey5,
                borderBottomWidth: 1,
                alignItems: 'center',
                paddingVertical: 10,
            },
            containerCheck: {
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
            },
            containerTrash: {
                flex: 1,
                width: '20%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: 10,
            },
            subtitle: {
                color: this.props.schema.primary,
                fontSize: 15,
            },
            title: {
                color: this.props.schema.white,
                fontSize: 17,
                fontWeight: 'bold'
            },
            done: {
                color: this.props.primary,
                height: 25,
                width: 25,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: this.props.schema.primary,
                backgroundColor: this.props.schema.primary,
                alignItems: 'center',
                justifyContent: 'center',
            },
            pending: {
                flexDirection: 'row',
                color: this.props.schema.primary,
                height: 25,
                width: 25,
                borderRadius: 13,
                borderWidth: 1,
                borderColor: this.props.schema.primary,
            },
            containerIcon: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: '15%'
            },
            textAlign: {
                width: '60%',
                justifyContent: 'flex-end',
            },
            colorTrash: {
                color: this.props.schema.trash
            },
            colorCheck: {
                color: this.props.schema.white
            },
        })

        const doneOrNot = this.props.doneAt != null
            ? { textDecorationLine: 'line-through' }
            : null

        const date = this.props.doneAt
            ? this.props.doneAt
            : this.props.estimateAt

        const formattedDate = moment(date)
            .locale('pt-br')
            .format('ddd, D [de] MMMM')

        getCheckView = (doneAt) => {
            if (doneAt != null) {
                return (
                    <View style={styles.done}>
                        <Icon name='check' size={20} style={styles.colorCheck}></Icon>
                    </View>
                )
            } else {
                return (
                    <View>
                        <Text style={styles.pending}></Text>
                    </View>
                )
            }
        }

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => this.props.onToggleReminder(this.props.id)}>
                    <View style={styles.containerCheck}>
                        {getCheckView(this.props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.title, doneOrNot]}>{this.props.desc}</Text>
                    <Text style={styles.subtitle}>{formattedDate}</Text>
                </View>
                <TouchableWithoutFeedback
                    onPress={() => this.props.onDelete && this.props.onDelete(this.props.id)}>
                    <View style={styles.containerTrash}>
                        <Icon name='trash' size={25} color={this.props.bg} />
                    </View>
                </TouchableWithoutFeedback>
            </View >
        )
    }
}

export default Reminder