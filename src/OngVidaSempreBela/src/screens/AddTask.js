import React, {
    Component
} from "react";
import {
    Modal,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Platform
} from "react-native";
import { Text, TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment'

import commomStyles from "../style/commomStyles";
import styleAddTask from "../style/styleAddTask";

const initialState = {
    desc: '',
    date: new Date(),
    showDatePicker: false
}

class AddTask extends Component {

    state = {
        ...initialState
    }

    saveNewTask = () => {
        const newTask = {
            ...this.state
        }

        this.props.onSave && this.props.onSave(newTask)
        this.setState({ ...initialState})
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker
            value={this.state.date}
            onChange={(_, date) => this.setState({ date, showDatePicker: false })}
            mode='date'
        />

        dateFormat = moment(this.state.date).format('dddd, D [de] MMMM [de] YYYY')
        
        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity
                        onPress={() => this.setState({showDatePicker: true}) }
                    >
                        <Text style={styleAddTask.dateFormat}>
                            {dateFormat}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }

        return datePicker
    }

    render() {

        return (
            <Modal
                style={commomStyles.container}
                transparent={true}
                visible={this.props.isVisible}
                onRquestClose={this.props.onCancel}
                animationType='slide'
            >
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}
                >
                    <View
                        style={styleAddTask.backgroundOverlay}
                    >

                    </View>
                </TouchableWithoutFeedback>
                <View
                    style={styleAddTask.backgorundModal}
                >
                    <Text style={styleAddTask.header}>
                        Nova Tarefa
                    </Text>
                    <TextInput
                        style={styleAddTask.input}
                        label="Task"
                        value={this.state.desc}
                        onChangeText={desc => this.setState({ desc })}
                    />
                    
                    {this.getDatePicker()}
                    <View style={styleAddTask.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styleAddTask.button}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.saveNewTask}>
                            <Text style={styleAddTask.button}>
                                Salvar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}
                >
                    <View
                        style={styleAddTask.backgroundOverlay}
                    >
                    </View>
                </TouchableWithoutFeedback>
            </Modal >
        )
    }
}

export default AddTask