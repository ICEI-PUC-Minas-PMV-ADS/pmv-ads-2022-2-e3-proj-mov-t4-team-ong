import { StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const btnOutlieStyle = StyleSheet.create({
    button: {
        marginBottom: 10,
        fontSize: 18,
        borderColor: commonStyles.today,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        paddingHorizontal: 50,
        with: 100,
        alignItems: 'center'
    },
    buttonText: {
        color: commonStyles.today,
        fontWeight: 'bold',
        fontSize: 20,

    },
    linkButton: {
        marginBottom: 10,
        fontSize: 18,
        padding: 10,
        paddingHorizontal: 50,
        with: 100,
        alignItems: 'center'
    }
})

export default btnOutlieStyle;