import { StyleSheet } from "react-native";
import commomStyles from "./commomStyles";

const styleTask = StyleSheet.create({
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        borderColor: commomStyles.borderClolor,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    containerCheck: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        color: commomStyles.today,
        fontSize: 15,
    },
    desc: {
        color: commomStyles.today,
        fontSize: 18,
        fontWeight: 'bold'
    },
    done: {
        color: commomStyles.txtColor,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: commomStyles.checkedColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        color: commomStyles.txtColor,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: commomStyles.borderClolor,
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContnt: 'flex-end',
        width: '20%'
    },
    center: {
        width: '60%',
        justifyContnt: 'flex-end',
    }
})

export default styleTask;