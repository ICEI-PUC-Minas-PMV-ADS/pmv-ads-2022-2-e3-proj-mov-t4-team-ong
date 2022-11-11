import React, { Component } from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

class BtnError extends Component {

    render() {
        console.log('BtnError', this.props)

        const styles = StyleSheet.create({
            text: {
                color: this.props.schema.trash,
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 0,
                padding: 0,

            },
            container: {
                marginTop: 0,
                padding: 0,
            },
        })
        return ( 
            <View style={styles.container}>
                <Text
                    style={[styles.text, this.props.styles]}
                >
                    {this.props.msgError}
                </Text>
            </View>
        )
    }
}

export default BtnError