import React, { Component } from "react";

import { Text } from "@rneui/themed";
import {
    FlatList,
    ImageBackground,
    View,
    TouchableOpacity,
    Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";

import axios from "axios"

import moment from 'moment'
import 'moment/locale/pt-br'

import todayImage from '../../../assets/imgs/today.png'
import tomorrowImage from '../../../assets/imgs/tomorrow.png'
import weekImage from '../../../assets/imgs/week.png'
import monthImage from '../../../assets/imgs/month.png'

import ActivityReminder from "./ActivityReminder";
import NewReminder from "./NewReminder";

import { server, showError, showSuccess } from '../../common/common'
import themeContext from "../../contexts/themeContext"
import commonStyles from "../../styles/commonStyles";

const colors = themeContext.lightColors

initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}

class Reminder extends Component {

    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('userLogged')
        const savedState = JSON.parse(stateString) || initialState

        this.setState({
            showDoneTasks: savedState.showDoneTasks
        }, this.filterTasks)

        this.loadTasks()
    }

    loadTasks = async () => {
        try {

            const maxDate = moment()
                .add({ days: this.props.daysAhead })
                .format('YYYY-MM-DD 23:59:59')
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
        AsyncStorage.setItem('userLogged', JSON.stringify({
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

    addTask = async newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados inválidos', 'Nome da task não informada!')
            return
        }
        try {
            await axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                estimateAt: newTask.date
            })

            this.setState({ showAddTask: false }, this.loadTasks)
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
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={commonStyles.containerPage}>
                <NewReminder
                    isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.addTask}
                />
                <ImageBackground source={this.getImage()}
                    style={commonStyles.containerImage}>
                    <View style={commonStyles.iconAlign}>
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
                            <ActivityReminder
                                {...item}
                                onToggleTasks={this.toggleTasks}
                                onDelete={this.deleteTask}
                            />}
                    />
                </View>
                <TouchableOpacity
                    style={[commonStyles.addButton, { backgroundColor: this.getColor() }]}
                    onPress={() => this.setState({ showAddTask: true })}
                >
                    <Icon name="plus" size={40} />
                </TouchableOpacity>
            </View >
        )
    }
}

export default Reminder