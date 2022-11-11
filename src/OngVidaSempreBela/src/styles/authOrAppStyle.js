import { StyleSheet } from "react-native"
import { color } from "react-native-reanimated";
import themeContext from "../contexts/themeContext"


const colors = themeContext.lightColors

const authOrAppStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black
    }
})

export default authOrAppStyle;