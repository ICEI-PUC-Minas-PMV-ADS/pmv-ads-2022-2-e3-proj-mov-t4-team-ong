import { Platform, StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const styleAddTask = StyleSheet.create({

    backgroundOverlay: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',

    },
    backgorundModal: {
        backgroundColor: commonStyles.modalBackgroundColor,
        flex: 1,
    },
    header: {
        backgroundColor: commonStyles.today,
        color: commonStyles.txtColor,
        textAlign: 'center',
        padding: 15,
        fontSize: 18, 
        fontWeight: 'bold'
    },
    input: {
        margin: 15,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        marginRight: 30,
        marginBottom: 10,
        color: commonStyles.today,
        fontSize: 18,
        fontWeight: 'bold'
    },
    dateFormat: {
        fontSize: 20,
        color: commonStyles.txtColor,
        margin: 15,
    },
})

export default styleAddTask;