import { StyleSheet } from "react-native"
import { color } from "react-native-reanimated";
import themeContext from "../contexts/themeContext"


const colors = themeContext.lightColors

const menuStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey0
    },
    containerHeader: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
                padding: 5
    },
    containerItems: {
        flex: 2,
        backgroundColor: colors.white
    },
    title: {
        color: colors.white,
        fontSize: 20,
        padding: 5
    },
    logoutIcon: {
        margin: 10
    },
   
    avatar: {
        width: 80,
        height: 80,
        borderWidth: 3,
        borderRadius: 40,
        borderColor: colors.grey0,
        margin: 10,
    },
    userInfo: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        color: colors.white,
        marginBottom: 5,
    },
    email: {
        fontSize: 15,
        color: colors.white,
        marginBottom: 10,
    },
})

export default menuStyle;