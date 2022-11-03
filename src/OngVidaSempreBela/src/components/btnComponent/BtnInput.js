import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import Icon  from "react-native-vector-icons/FontAwesome";

import themeContext from "../../contexts/themeContext";

const colors = themeContext.lightColors

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
                underlineColor={colors.white}
                activeUnderlineColor={colors.black}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        marginBottom: 10    

    },
    input: {
        marginHorizontal: 10,
        width: '75%',
        backgroundColor: colors.white,
    },
    icon: {
        marginLeft: 20,
        color: colors.grey2,
    }
})

export default BtnInput