import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import Icon  from "react-native-vector-icons/FontAwesome";

import themeContext from "../../src/components/Componentes Alex/src/src/contexts/themeContext"

const theme = themeContext

const BtnInput = (props) => {

    return (
        <View style={[styles.container, props.styles]}>
            <Icon
                name={props.icon}
                size={25}
                style={styles.icon}
            />
            <TextInput
                {...props}
                size={20}
                style={[styles.input, props.styles]}
                underlineColor={theme.lightColors.white}
                activeUnderlineColor={theme.lightColors.black}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.lightColors.white,
        borderRadius: 20,
        marginBottom: 10    

    },
    input: {
        marginHorizontal: 10,
        width: '75%',
        backgroundColor: theme.lightColors.white,
    },
    icon: {
        marginLeft: 20,
        color: theme.lightColors.grey2,
    }
})
export default BtnInput