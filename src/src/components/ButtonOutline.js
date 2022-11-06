import React from 'react';
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonOutline = (props) => {
    const { colors } = useTheme()

    return (
        <Button
            mode="outlined"
            theme={colors.theme}
            style={styles.btn} {...props}>
            {props.funcao}
        </Button>
    );
};

const styles = StyleSheet.create({
    btn: {
        margin: 10,
        paddingHorizontal: 30,
    },
});

export default ButtonOutline;
