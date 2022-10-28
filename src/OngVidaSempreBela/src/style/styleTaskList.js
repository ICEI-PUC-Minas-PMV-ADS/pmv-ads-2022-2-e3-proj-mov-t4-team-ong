import { Platform, StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const styleTaskList = StyleSheet.create({
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTo: Platform.OS === 'ios' ? 40 : 10,
    },
    iconImage: {
        color: commonStyles.txtColor,
        fontSize: 35,
    },
    subtitle: {
        fontSize: 20,
        color: commonStyles.txtColor,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 20,
    },
    taskList: {
        flex: 11,
    },
    taskListBackground: {
        flex: 4,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    title: {
        fontSize: 50,
        color: commonStyles.txtColor,
        marginLeft: 20,
        marginBottom: 10,
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.today,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styleTaskList;