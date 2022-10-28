import React from "react";
import {
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment'
import 'moment/locale/pt-br'

import styleTask from "../../style/styleTask";

const Task = (props) => {

    const doneOrNot = props.doneAt != null
        ? { textDecorationLine: 'line-through' }
        : null

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={styleTask.containerRow}>
            <TouchableWithoutFeedback
                onPress={() => props.onToggleTasks(props.id)}
            >
                <View style={styleTask.containerCheck} >
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            <View style={styleTask.center}>
                <Text style={[styleTask.desc, doneOrNot]}>{props.desc}</Text>
                <Text style={styleTask.date}>{formattedDate}</Text>
            </View>
            <View style={styleTask.right}>
                <TouchableWithoutFeedback onPress={() => props.onDelete && props.onDelete(props.id)}>
                    <Icon name="trash" size={30} color='red' />
                </TouchableWithoutFeedback>
            </View>
        </View>


    )
}

function getCheckView(dataConcluida) {
    if (dataConcluida != null) {
        return (
            <View style={styleTask.done}>
                <Icon name='checkmark' size={20} color='white'></Icon>
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

export default Task