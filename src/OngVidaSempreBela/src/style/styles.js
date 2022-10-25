import { Platform, StyleSheet } from "react-native";
import commomStyles from "./commomStyles";

const styles = StyleSheet.create({
    txtColor: {
        color: 'white',
    },
    container: {
        flex: 1,
    },
    containerRow: {
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
        color: commomStyles.txtColor,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: commomStyles.txtColor,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 20,
    },
    pending: {
        color: commomStyles.txtColor,
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: commomStyles.borderClolor,
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
    description: {
        color: commomStyles.txtStyle.color,
        fontSize: commomStyles.txtStyle.fontSize,
    },
    date: {
        color: commomStyles.subTitleColor,
        fontSize: 15,
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTo: Platform.OS === 'ios' ? 40 : 10,
    },
    iconImage: {
        color: commomStyles.txtColor,
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