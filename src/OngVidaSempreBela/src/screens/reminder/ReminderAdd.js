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
import { Text } from "react-native-paper";

import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment'

import taskAddStyle from "../../styles/taskAddStyle";

import BtnInput from "../../components/btnComponent/BtnInput";
import BtnOutline from "../../components/btnComponent/BtnOutline";
import commonStyles from "../../styles/commonStyles";

const initialState = {
    desc: '',
    date: new Date(),
    showDatePicker: false
}

class ReminderAdd extends Component {

    state = {
        ...initialState
    }

    saveNewReminder = () => {
        const newReminder = {
            ...this.state
        }

        this.props.onSave && this.props.onSave(newReminder)
        this.setState({ ...initialState })
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
                        onPress={() => this.setState({ showDatePicker: true })}
                    >
                        <Text style={taskAddStyle.dateDisplay}>
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
                style={taskAddStyle.container}
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'
            >
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}
                >
                    <View
                        style={taskAddStyle.backgroundOverlay}
                    >

                    </View>
                </TouchableWithoutFeedback>
                <View
                    style={taskAddStyle.backgroundModal}
                >
                    <Text style={taskAddStyle.header}>
                        Nova Tarefa
                    </Text>
                    <View
                    >
                        <BtnInput
                            label="Nova Tarefa"
                            icon="tasks"
                            value={this.state.desc}
                            onChangeText={desc => this.setState({ desc })}
                        />
                    </View>

                    {this.getDatePicker()}
                    <View style={commonStyles.containerButtons}>
                        <BtnOutline
                            onPress={this.props.onCancel}
                            title='Cancelar'
                        />
                        <BtnOutline
                            onPress={this.saveNewReminder}
                            title='Salvar'
                        />

                    </View>
                </View>
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}
                >
                    <View
                        style={commonStyles.backgroundOverlay}
                    >
                    </View>
                </TouchableWithoutFeedback>
            </Modal >
        )
    }
}

export default ReminderAdd

