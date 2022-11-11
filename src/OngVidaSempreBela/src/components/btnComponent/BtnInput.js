import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from '@rneui/themed';
import Icon from "react-native-vector-icons/FontAwesome";

class BtnInput extends Component {

    render() {
        const styles = StyleSheet.create({
            icon: {
                marginLeft: 5,
                color: this.props.schema.today,
            }
        })

        return (
            <Input
                leftIcon={<Icon
                    name={this.props.icon}
                    size={15}
                    style={styles.icon}
                />}
                {...this.props}
                fontSize={15}
                color={
                    this.props.error
                        ? this.props.schema.error
                        : this.props.schema.white}
                labelStyle={{ fontSize: 10, margin: 0, padding:0 }}
                placeholder={this.props.label}
            />
        )
    }
}



export default BtnInput
