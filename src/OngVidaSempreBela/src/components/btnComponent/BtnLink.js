import React, { Component } from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

class BtnLink extends Component {

    render() {
        const styles = StyleSheet.create({
            button: {
                marginBottom: 10,
                padding: 10,
                paddingHorizontal: 10,
                with: '100%',
                alignItems: 'center'
            },
            buttonText: {
                color: this.props.schema.white,
                fontWeight: 'bold',
                fontSize: 15,
            },
        })
        return (
            <Button
                {...this.props}
                type='clear'
                buttonStyle={[styles.button, this.props.styles]}
                titleStyle={[styles.buttonText, this.props.styles]}
            />
        )
    }
}

export default BtnLink