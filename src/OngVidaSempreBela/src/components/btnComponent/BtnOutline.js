import React, { Component } from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

class BtnOutline extends Component {

    render() {

        console.log('BtnOutline: ')

        const styles = StyleSheet.create({
            button: {
                marginBottom: 10,
                fontSize: 18,
                borderColor: this.props.schema.white,
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 15,
                padding: 10,
                paddingHorizontal: 50,
                with: 100,
                alignItems: 'center'
            },
            buttonText: {
                color: this.props.schema.white,
                fontWeight: 'bold',
                fontSize: 20,

            },
            disabled: {
                backgroundColor: this.props.schema.disabled
            }
        })

        return (
            <View>
                <Button
                    {... this.props}
                    type='clear'
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    disabledStyle={styles.disabled}
                />
            </View>
        )
    }
}



export default BtnOutline