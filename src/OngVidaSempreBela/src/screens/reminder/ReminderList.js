import React, { Component } from "react"

import { Text } from "@rneui/themed"

import {
    FlatList,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native"

import Icon from "react-native-vector-icons/FontAwesome"

import moment from "moment/moment"
import 'moment/locale/pt-br'

import AsyncStorage from "@react-native-community/async-storage"

import axios from 'axios'

import monthImage from '../../../assets/imgs/monthList.png'
import todayImage from '../../../assets/imgs/todayList.png'
import tomorrowImage from '../../../assets/imgs/tomorrowList.png'
import weekImage from '../../../assets/imgs/weekList.png'

import Reminder from '../../common/components/Reminder'
import ReminderAdd from '../reminder/ReminderAdd'

import commonStyles from "../../common/styles/commonStyles"

import { server, showError, showSuccess } from '../../common/configuration/common'

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
        const savedState = JSON.parse(stateString) || initialState
        this.loadReminders()
        this.setState({
            showDoneReminders: savedState.showDoneReminders
        }, this.filterReminders)
    }

    loadReminders = async () => {
        try {
            const maxDate = moment()
                .add({ days: this.props.daysAhead })
                .format('YYYY-MM-DD 23:59:59')
            const res = await axios.get(`${server}/reminders?date=${maxDate}`)
            this.setState({ reminders: res.data }, this.filterReminders)
        } catch (e) {
            console.log(e)
            showError(e)
        }
    }

    toggleReminder = async reminderId => {
        try {
            await axios.put(`${server}/reminders/${reminderId}/toggle`)
            this.loadReminders()
        } catch (e) {
            showError(e)
        }
    }

    toggleFilter = () => {
        console.log('toggleFilter', this.state.showDoneReminders)
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
        AsyncStorage.setItem('reminderState', JSON.stringify({
            showDoneReminders: this.state.showDoneReminders
        }))
    }

    addReminder = async (newReminder) => {
        if (!newReminder.desc || !newReminder.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Nome da tarefa não informado!')
        }

        try {
            await axios.post(`${server}/reminders`, {
                desc: newReminder.desc,
                estimateAt: newReminder.date
            })

            this.setState({ showReminderAdd: false }, this.loadReminders)
        } catch (e) {
            showError(e)
        }
    }

    deleteReminder = async (reminderId) => {
        try {
            await axios.delete(`${server}/reminders/${reminderId}`)
            this.loadReminders()
        } catch (e) {
            showError(e)

        }
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
                fontWeight: 'bold',
                fontSize: 18,
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
                        <Text style={styles.subtitle}>{today}</Text>
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