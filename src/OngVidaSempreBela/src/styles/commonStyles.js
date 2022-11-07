import { StyleSheet } from "react-native"
import themeContext from "../contexts/themeContext"

const colors = themeContext.lightColors

const commonStyles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundHomePage: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerError: {
        marginTop: -5,
        marginBottom: 10,
        marginStart: 47
    },
    containerForm: {
        paddingHorizontal: 20,
        width: '100%',
        marginTop: 5,
        backgroundColor: colors.overlay
    },
    containerImage: {
        flex: 7,
    },
    containerPage: {
        flex: 1,
    },
    containerScreen: {
        flex: 14,
        backgroundColor: colors.black,
    },
    iconAlign: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'flex-end',
        marginTo: Platform.OS === 'ios' ? 40 : 10,
    },
    iconImage: {
        color: colors.white,
        fontSize: 35,
    },
    subtitle: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 15,
    },
    titleAlign: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 50,
        color: colors.white,
        marginLeft: 15,
        marginBottom: 10,
    },
    titleForm: {
        fontSize: 20,
        color: colors.white,
        marginBottom: 10,
    },
    txtError: {
        marginTop: -5,
        color: colors.error
    }
})

export default commonStyles