import React from 'react';
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
    const { colors } = useTheme()

    return (
        <TextInput
            style={styles.container}
            theme={colors.theme}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});

export default Input;