import React from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import themeContext from '../../contexts/themeContext';

const colors = themeContext.lightColors

const BtnLink = (props) => {
    return (
        <View>
            <Button
                {...props}
                type='clear'
                buttonStyle={[styles.button, props.styles]}
                titleStyle={[styles.buttonText, props.styles]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
        fontSize: 18,
        padding: 10,
        paddingHorizontal: 50,
        with: 100,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.greyOutline,
        fontWeight: 'bold',
        fontSize: 20,

    },
})

export default BtnLink
