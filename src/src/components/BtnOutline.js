import React from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
//import themeContext from '../../contexts/themeContext'
import themeContext from "../../src/components/Componentes Alex/src/src/contexts/themeContext"

const theme = themeContext

const BtnOutline = (props) => {
    return (
        <View>
            <Button
                {...props}
                type='clear'
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
                disabledStyle={styles.disabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
        fontSize: 18,
        borderColor: theme.lightColors.greyOutline,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        paddingHorizontal: 50,
        with: 100,
        alignItems: 'center'
    },
    buttonText: {
        color: theme.lightColors.greyOutline,
        fontWeight: 'bold',
        fontSize: 20,

    },
    disabled: {
        backgroundColor: theme.lightColors.disabled
    }
})

export default BtnOutline
