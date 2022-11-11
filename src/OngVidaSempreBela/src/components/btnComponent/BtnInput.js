import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import Icon  from "react-native-vector-icons/FontAwesome";

class BtnInput extends Component {

    render() {
        console.log('BtnInput')
       
        const styles = StyleSheet.create({
            container: {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: this.props.schema.white,
                borderRadius: 20,
                marginBottom: 10

            },
            input: {
                marginHorizontal: 10,
                width: '75%',
                backgroundColor: this.props.schema.white,
            },
            icon: {
                marginLeft: 20,
                color: this.props.schema.today,
            }
        })

        return (
            <View style={[styles.container, this.props.styles]}>
                <Icon
                    name={this.props.icon}
                    size={25}
                    style={styles.icon}
                />
                <TextInput
                    {...this.props}
                    size={20}
                    style={[styles.input, this.props.styles]}
                    underlineColor={this.props.schema.white}
                    activeUnderlineColor={this.props.schema.black}
                />
            </View>
        )
    }
}



export default BtnInput
