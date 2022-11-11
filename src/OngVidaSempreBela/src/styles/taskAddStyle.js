import { StyleSheet } from "react-native";
import themeContext from "../contexts/themeContext";

const colors = themeContext.lightColors

const taskAddStyle = StyleSheet.create({

    backgroundModal: {
        flex: 1.3,
        backgroundColor: colors.grey0,
    },
    container: {
        flex: 1,
    },
    dateDisplay: {
        fontSize: 20,
        color: colors.white,
        margin: 15,
    },
    header: {
        backgroundColor: colors.today,
        color: colors.white,
        textAlign: 'center',
        padding: 15,
        fontSize: 18, 
        fontWeight: 'bold',
        marginBottom: 10
    },
})

export default taskAddStyle;