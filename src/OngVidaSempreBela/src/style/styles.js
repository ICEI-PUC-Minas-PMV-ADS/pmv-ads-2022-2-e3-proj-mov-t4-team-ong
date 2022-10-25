import { Platform, StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const styles = StyleSheet.create({
    txtColor: {
        color: 'white',
    },
    container: {
        flex: 1,
    },
    containerRow: {
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
    background: {
        flex: 4,
    },
    taskList: {
        flex: 11,
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
    subtitle: {
        fontSize: 20,
        color: commonStyles.txtColor,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 20,
    },
    pending: {
        color: commonStyles.txtColor,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: commonStyles.borderClolor,
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
    description: {
        color: commonStyles.txtStyle.color,
        fontSize: commonStyles.txtStyle.fontSize,
    },
    date: {
        color: commonStyles.subTitleColor,
        fontSize: 15,
    },
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
    backgroundOverlay: {
        flex: 1,
        backgroundColor: 'rgba(30, 60, 60, 0.6)',

    },
    backgorundModal: {
        flex: 1,
        backgroundColor: '#DEA680'
    },
})

export default styles;