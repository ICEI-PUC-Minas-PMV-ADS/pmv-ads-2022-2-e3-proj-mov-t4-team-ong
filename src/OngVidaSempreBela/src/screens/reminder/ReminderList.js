import React, { Component } from "react";

import { Text } from "@rneui/themed";

import {
    FlatList,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import moment from "moment/moment"
import 'moment/locale/pt-br'

import AsyncStorage from "@react-native-community/async-storage";

import todayImage from '../../../assets/imgs/todayList.png'
import tomorrowImage from '../../../assets/imgs/tomorrowList.png'
import weekImage from '../../../assets/imgs/weekList.png'
import monthImage from '../../../assets/imgs/monthList.png'

import Reminder from '../../components/reminder/Reminder'
import ReminderAdd from '../reminder/ReminderAdd'

import commonStyles from "../../common/styles/commonStyles"

initialState = {
    showDoneReminders: false,
    showReminderAdd: false,
    visibleReminders: [],
    reminders: []
}

class ReminderList extends Component {

    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('reminderState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state)
        this.filterReminders()
    }

    toggleReminder = reminderId => {
        const reminders = [...this.state.reminders]

        reminders.forEach(reminder => {
            if (reminder.id === reminderId) {
                reminder.doneAt = reminder.doneAt ? null : new Date()
            }
        })

        this.setState({ reminders }, this.filterReminders)
    }

    toggleFilter = () => {
        this.setState({ showDoneReminders: !this.state.showDoneReminders }, this.filterReminders)
    }

    filterReminders = () => {
        let visibleReminders = null

        if (this.state.showDoneReminders) {
            visibleReminders = [...this.state.reminders]
        } else {
            const pending = reminder => reminder.doneAt === null
            visibleReminders = this.state.reminders.filter(pending)
        }

        this.setState({ visibleReminders })
        AsyncStorage.setItem('reminderState', JSON.stringify(this.state))
    }

    addReminder = (newReminder) => {
        if (!newReminder.desc || !newReminder.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Nome da tarefa não informado!')
        }

        const reminders = [...this.state.reminders]
        reminders.push({
            id: Math.random(),
            desc: newReminder.desc,
            estimateAt: newReminder.date,
            doneAt: null
        })

        this.setState({ reminders, showReminderAdd: false }, this.filterReminders)
    }

    deleteReminder = (id) => {
        const reminders = this.state.reminders.filter(reminder => reminder.id !== id)
        this.setState({ reminders }, this.filterReminders)
    }

    getImage = () => {
        switch (this.props.daysAhead) {
            case 0: return todayImage
            case 1: return tomorrowImage
            case 7: return weekImage
            case 30: return monthImage
            default: return monthImage
        }
    }

    getColor = () => {
        switch (this.props.daysAhead) {
            case 0: return this.props.schema.today
            case 1: return this.props.schema.tomorrow
            case 7: return this.props.schema.week
            case 30: return this.props.schema.month
            default: return this.props.schema.today
        }
    }

    render() {
        console.log('ReminderList ', this.props)

        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        const styles = StyleSheet.create({
            addButton: {
                backgroundColor: this.getColor()
            },
            containerScreen: {
                backgroundColor: this.props.schema.screenBackground
            },
            iconImage: {
                color: this.props.schema.white
            },
            titleLarge: {
                fontFamily: 'Lato',
                fontSize: 50,
                color: this.props.schema.white,
                marginLeft: 15,
                marginBottom: 10,
                fontWeight: 'bold'
            },
            subtitle: {
                color: this.props.schema.white,
            }
        })

        return (
            <View style={commonStyles.container}>
                <ReminderAdd
                    isVisible={this.state.showReminderAdd}
                    onCancel={() => this.setState({ showReminderAdd: false })}
                    onSave={this.addReminder}
                    schema={this.props.schema}
                    bg={this.getColor()}
                />
                <ImageBackground
                    source={this.getImage()}
                    style={commonStyles.containerImage}
                >
                    <View style={commonStyles.iconAlign}>
                        <TouchableOpacity onPress={this.toggleFilter} >
                            <Icon
                                name={this.state.showDoneReminders
                                    ? 'eye' : 'eye-slash'}
                                style={[commonStyles.iconImage, styles.iconImage]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={commonStyles.titleAlign}>
                        <Text style={styles.titleLarge}>{this.props.title ? this.props.title : 'Hoje'}</Text>
                        <Text style={[commonStyles.subtitle, styles.subtitle]}>{today}</Text>
                    </View>
                </ImageBackground>
                <View
                    style={[commonStyles.containerScreen, styles.containerScreen]}
                >
                    <FlatList
                        data={this.state.visibleReminders}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Reminder
                            {...item}
                            schema={this.props.schema}
                            onToggleReminder={this.toggleReminder}
                            onDelete={this.deleteReminder}
                            bg={this.getColor()}
                        />}
                    />

                </View>
                <TouchableOpacity
                    style={[commonStyles.addButton, styles.addButton]}
                    onPress={() => this.setState({ showReminderAdd: true })}
                >
                    <Icon name="plus" size={40} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default ReminderList