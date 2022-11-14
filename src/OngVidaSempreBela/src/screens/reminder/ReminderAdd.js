import React, { Component } from "react";

import {
    Alert,
    Modal,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

import { Text } from "@rneui/themed";

import commonStyles from "../../common/styles/commonStyles";

import BtnInput from "../../components/btnComponent/BtnInput";
import BtnOutline from "../../components/btnComponent/BtnOutline";

import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment"

import Icon from "react-native-vector-icons/FontAwesome"

import {
    isValidField,
    msgError
} from "../../common/error/commonMsgError"

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
            desc: this.state.desc,
            date: this.state.date,
        }

        this.props.onSave && this.props.onSave(newReminder)
        
        this.setState({ ...initialState })
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker
            value={this.state.date}
            onChange={(_, date) => this.setState({ date, showDatePicker: false })}
            mode='date'
            textColor={this.props.schema.white}
        />

        dateFormat = moment(this.state.date).format('dddd, D [de] MMMM [de] YYYY')

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity
                        onPress={() => this.setState({ showDatePicker: true })}
                    >
                        <Text style={commonStyles.dateDisplay}>
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
        console.log('ReminderAdd')

        const styles = StyleSheet.create({
            backgroundModal: {
                flex: 1.7,
                backgroundColor: this.props.schema.grey0,
            },
            backgroundOverlay: {
                flex: 1,
                backgroundColor: 'rgba(1, 1, 1, 0.7)',
            },
            header: {
                textAlign: 'center',
                padding: 15,
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
                backgroundColor: this.props.bg,
                color: this.props.schema.white
            },
            visor: {
                flexDirection: 'row',
                backgroundColor: this.props.bg,
                marginHorizontal: 10,
                borderRadius: 15,
                alignItems: 'center'
            },
            icon: {
                color: this.props.schema.white,
                marginStart: 10,
            }
        })
        return (
            <Modal
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                onSave={this.addReminder}
                animationType='fade'
            >
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}
                >
                    <View style={styles.backgroundOverlay}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.backgroundModal}>
                    <Text style={styles.header}>
                        Nova Tarefa
                    </Text>
                    <BtnInput
                        label='Nome Tarefa'
                        icon='tasks'
                        value={this.state.desc}
                        onChangeText={desc => this.setState({ desc: desc })}
                        schema={this.props.schema}
                        errorMessage={this.state.desc && !isValidField(this.state.desc, 4) ? msgError('txt', 4) : ''}
                        error={!isValidField(this.state.desc, 4)}
                        bg={this.props.bg}
                    />
                    <View style={styles.visor}> 
                        <Icon name="calendar" size={20} style={styles.icon} /> 
                        {this.getDatePicker()}
                    </View> 
                    <View style={commonStyles.containerButtons}>
                        <BtnOutline
                            onPress={this.props.onCancel}
                            title='Cancelar'
                            schema={this.props.schema}
                        />
                        <BtnOutline
                            onPress={this.saveNewReminder}
                            title='Salvar'
                            disabled={!isValidField(this.state.desc, 4)}
                            schema={this.props.schema}
                        />
                    </View>
                </View>
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}
                >
                    <View style={styles.backgroundOverlay}>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

export default ReminderAdd