import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from '@rneui/themed';
import Icon from "react-native-vector-icons/FontAwesome";

class BtnInput extends Component {

    render() {
        const styles = StyleSheet.create({
            icon: {
                marginLeft: 5,
                color: this.props.bg,
            }
        })

        return (
            <Input
                leftIcon={<Icon
                    name={this.props.icon}
                    size={20}
                    style={styles.icon}
                />}
                {...this.props}
                fontSize={20}
                color={
                    this.props.error
                        ? this.props.schema.error
                        : this.props.schema.white}
                labelStyle={{ fontSize: 15, margin: 0, padding: 0, color: this.props.bg }}
                placeholder={this.props.label}
            />
        )
    }
}



export default BtnInput
