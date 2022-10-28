import { StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const styleTask = StyleSheet.create({
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        borderColor: commonStyles.borderClolor,
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
        color: commonStyles.today,
        fontSize: 15,
    },
    desc: {
        color: commonStyles.today,
        fontSize: 18,
        fontWeight: 'bold'
    },
    done: {
        color: commonStyles.txtColor,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: commonStyles.checkedColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        color: commonStyles.txtColor,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: commonStyles.borderClolor,
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