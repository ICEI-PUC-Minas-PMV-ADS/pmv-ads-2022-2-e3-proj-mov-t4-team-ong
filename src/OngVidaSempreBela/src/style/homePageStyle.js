import {StyleSheet } from "react-native";
import commonStyles from "./commonStyles";

const homePageStyle = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        padding: 20,
        color: commonStyles.txtColor,
        marginTop: 350,
        fontSize: 30
    },
})

export default homePageStyle;