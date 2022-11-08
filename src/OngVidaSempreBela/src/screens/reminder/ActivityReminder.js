import React from "react";
import {
    View,
    TouchableWithoutFeedback,
} from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import moment from 'moment'
import 'moment/locale/pt-br'

import styleTask from "../../styles/taskStyle";
import taskStyle from "../../styles/taskStyle";

const ActivityReminder = (props) => {

    const doneOrNot = props.doneAt != null
        ? { textDecorationLine: 'line-through' }
        : null

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={styleTask.container}>
            <TouchableWithoutFeedback
                onPress={() => props.onToggleTasks(props.id)}
            >
                <View style={styleTask.containerCheck} >
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View style={styleTask.textAlign}>
                <Text style={[styleTask.title, doneOrNot]}>{props.desc}</Text>
                <Text style={styleTask.subtitle}>{formattedDate}</Text>
            </View>
            <View style={styleTask.containerIcon}>
                <TouchableWithoutFeedback onPress={() => props.onDelete && props.onDelete(props.id)}>
                    <Icon name="trash" size={30} style={taskStyle.colorTrash} />
                </TouchableWithoutFeedback>
            </View>
        </View>


    )
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styleTask.done}>
                <Icon name='check' size={20} style={taskStyle.colorCheck}></Icon>
            </View>
        )
    } else {
        return (
            <View>
                <Text style={styleTask.pending}></Text>
            </View>
        )
    }
}

export default ActivityReminder