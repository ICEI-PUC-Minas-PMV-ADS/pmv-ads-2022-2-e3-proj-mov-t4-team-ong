import React, { Component } from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

class BtnLink extends Component {

    render() {
        console.log('BtnLink')

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
                color: this.props.schema.white,
                fontWeight: 'bold',
                fontSize: 20,

            },
        })
        return (
            <View>
                <Button
                    {...this.props}
                    type='clear'
                    buttonStyle={[styles.button, this.props.styles]}
                    titleStyle={[styles.buttonText, this.props.styles]}
                />
            </View>
        )
    }
}

export default BtnLink