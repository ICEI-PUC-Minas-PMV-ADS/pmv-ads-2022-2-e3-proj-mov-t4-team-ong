import { StyleSheet } from "react-native"
import themeContext from "../contexts/themeContext"


const colors = themeContext.lightColors

const taskStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: colors.grey5,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    containerCheck: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        color: colors.primary,
        fontSize: 15,
    },
    title: {
        color: colors.white,
        fontSize: 17,
        fontWeight: 'bold'
    },
    done: {
        color: colors.primary,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        color: colors.primary,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    containerIcon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '15%'
    },
    textAlign: {
        width: '60%',
        justifyContent: 'flex-end',
    },
    colorTrash: {
        color: colors.trash
    },
    colorCheck: {
        color: colors.white
    },
})

export default taskStyle;