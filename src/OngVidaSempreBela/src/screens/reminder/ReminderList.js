import React, { Component } from "react"

import moment from "moment/moment"
import 'moment/locale/pt-br'

import {
    FlatList,
    ImageBackground,
    View,
    TouchableOpacity,
    Alert,
} from "react-native"

import { Text } from "@rneui/themed"

import Icon from "react-native-vector-icons/FontAwesome";

import todayImage from '../../assets/imgs/todayList.png'
import tomorrowImage from '../../assets/imgs/tomorrowList.png'
import weekImage from '../../assets/imgs/weekList.png'
import monthImage from '../../assets/imgs/monthList.png'

import commonStyles from "../../common/styles/commonStyles";

import ReminderAdd from '../reminder/ReminderAddr'

initialState = {
    showDoneReminders: true,
    showReminderAdd: false,
    visibleReminders: [],
    reminders: []
}

class ReminderList extends Component {

    state = {
        ...initialState
    }

    render() {
        console.log('Reminder ', this.props)
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

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
                case 0: return colors.today
                case 1: return colors.tomorrow
                case 7: return colors.week
                case 30: return colors.month
                default: return colors.today
            }
        }
        return (
            <View style={commonStyles.containerPage}>
                <ReminderAdd
                    isVisible={this.state.showReminderAdd}
                    onCancel={() => this.setState({ showReminderAdd: false })}
                   onSave={this.ReminderAdd}
                />
                <ImageBackground source={this.getImage()}
                    style={commonStyles.containerImage}>
                    <View style={commonStyles.iconAlign}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                            <Icon
                                name='bars'
                                style={commonStyles.iconImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter} >
                            <Icon
                                name={this.state.showDoneTasks
                                    ? 'eye' : 'eye-slash'}
                                style={commonStyles.iconImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={commonStyles.titleAlign}>
                        <Text style={commonStyles.title}>{this.props.title ? this.props.title : 'Hoje'}</Text>
                        <Text style={commonStyles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View
                    style={commonStyles.containerScreen}
                >
                    <FlatList
                        data={this.state.visibleTasks}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Task
                                {...item}
                                onToggleTasks={this.toggleTasks}
                                onDelete={this.deleteTask}
                            />
                        }
                    />
                </View>
                <TouchableOpacity
                    style={[commonStyles.addButton, { backgroundColor: this.getColor() }]}
                    onPress={() => this.setState({ showReminderAdd: true })}
                >
                    <Icon name="plus" size={40} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default ReminderList

{/*




import AsyncStorage from "@react-native-community/async-storage";

import axios from "axios"





import Task from "./Reminder";
import ReminderAdd from "./ReminderAdd";

import { server, showError, showSuccess } from '../common/common'



class ReminderList extends Component {


    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('remindersState')
        const savedState = JSON.parse(stateString) || initialState

        this.setState({
            showDoneReminders: savedState.showDoneReminders
        }, this.filterTasks)

        this.loadTasks()
    }

    loadTasks = async () => {
        try {

            const maxDate = moment()
                .add({ days: this.props.daysAhead })
                .format('YYYY-MM-DD 23:59:59')
            console.log('date', maxDate)
            const res = await axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({ tasks: res.data }, this.filterTasks)
        } catch (e) {
            showError(e)
        }
    }
    filterTasks = () => {
        let visibleTasks = null

        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
        AsyncStorage.setItem('tasksState', JSON.stringify({
            showDoneTasks: this.state.showDoneTasks
        }))
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    toggleTasks = async taskId => {
        try {
            await axios.put(`${server}/tasks/${taskId}/Toggle/`)

            this.loadTasks()
        } catch (e) {
            showError(e)
        }
    }

    ReminderAdd = async newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados inválidos', 'Nome da task não informada!')
            return
        }
        try {
            await axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                estimateAt: newTask.date
            })

            this.setState({ showReminderAdd: false }, this.loadTasks)
        } catch (e) {
            showError(e)
        }
    }

    deleteTask = async (taskId) => {
        try {
            await axios.delete(`${server}/tasks/${taskId}`)
            this.loadTasks()
        } catch (e) {
            showError(e)
        }
    }
}

*/}

