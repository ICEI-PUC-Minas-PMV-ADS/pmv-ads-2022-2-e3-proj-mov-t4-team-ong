import React, {
    Component
} from "react";
import { Text } from "@rneui/themed";
import {
    FlatList,
    ImageBackground,
    View,
    TouchableOpacity,
    Alert
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-community/async-storage";

import moment from 'moment'
import 'moment/locale/pt-br'

import ongTaskList from '../../assets/imgs/ong-task-list.png'
import Task from "../components/screen/Task";
import Addtask from "./AddTask";
import styleTaskList from "../style/styleTaskList";
import commomStyles from "../style/commomStyles";

initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}

class TaskList extends Component {

    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state, this.filterTasks)
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
        AsyncStorage.setItem('tasksState', JSON.stringify(this.state))
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    toggleTasks = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks: tasks }, this.filterTasks)
    }

    addTask = newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Nome da task não informada!')
            return
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null
        })
        console.log('Saving2...', tasks)
        this.setState({ tasks, showAddTask: false }, this.filterTasks)
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter(task => task.id !== id)    
        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={commomStyles.container}>
                <Addtask
                    isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.addTask}
                />
                <ImageBackground source={ongTaskList}
                    style={styleTaskList.taskListBackground}>
                    <View style={styleTaskList.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter} >
                            <Icon raised
                                name={this.state.showDoneTasks
                                    ? 'eye' : 'eye-off'}
                                style={styleTaskList.iconImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styleTaskList.titleBar}>
                        <Text style={styleTaskList.title}>Hoje</Text>
                        <Text style={styleTaskList.subtitle}>{today}</Text>
                    </View>

                </ImageBackground>
                <View
                    style={styleTaskList.taskList}
                >
                    <FlatList
                        data={this.state.visibleTasks}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Task
                                {...item}
                                onToggleTasks={this.toggleTasks}
                                onDelete={this.deleteTask}
                            />}
                    />
                </View>
                <TouchableOpacity
                    style={styleTaskList.addButton}
                    onPress={() => this.setState({ showAddTask: true })}
                >
                    <Icon name="add-sharp" size={40} color={commomStyles.txtColor} />
                </TouchableOpacity>
            </View >
        )
    }
}

export default TaskList