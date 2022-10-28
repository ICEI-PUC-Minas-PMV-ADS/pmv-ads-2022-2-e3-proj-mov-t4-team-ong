import { StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const btnInputStyle = StyleSheet.create({
    container: {
        width: '100%',
        heigth: 40,
        backgroundColor: commonStyles.txtColor,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10

    },
    icon: {
        color: commonStyles.today,
        marginLeft: 20,
    },
    input: {
        marginLeft: 10,
        width: '85%',
    },
})

export default btnInputStyle;