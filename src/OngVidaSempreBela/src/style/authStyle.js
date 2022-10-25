import { StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const authStyle = StyleSheet.create({
    formContainer: {
        padding: 20,
        width: '100%',
        marginTop: 10
    },
    title: {
        fontSize: 20,
        color: commonStyles.today,
        marginBottom: 10,
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
})

export default authStyle;