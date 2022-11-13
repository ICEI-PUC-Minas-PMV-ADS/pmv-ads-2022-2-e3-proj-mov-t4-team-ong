import React, { Component } from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

class BtnOutline extends Component {

    render() {

         const styles = StyleSheet.create({
            button: {
                marginBottom: 5,
                borderColor: this.props.schema.white,
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 15,
                padding: 10,
                paddingHorizontal: 50,
                alignItems: 'center'
            },
            buttonText: {
                color: this.props.schema.white,
                fontWeight: 'bold',
                fontSize: 15,

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