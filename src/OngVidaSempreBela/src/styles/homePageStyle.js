import { StyleSheet } from "react-native";
import themeContext from '../contexts/themeContext'

const colors = themeContext.lightColors

const homePageStyle = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        padding: 20,
        color: colors.white,
        marginTop: 150,
        fontSize: 30
    },
    iconImage: {
        color: colors.white,
        fontSize: 35,
    },
    iconAlign: {
        flex: 1,
        flexDirection: 'row',
        marginEnd: 350
    },
})

export default homePageStyle;