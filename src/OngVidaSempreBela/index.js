/**
 * @format
 */
import 'react-native-gesture-handler';

import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createTheme, lightColors, ThemeProvider } from "@rneui/themed";

import { AppRegistry } from "react-native";

import { name as appName } from './app.json'

import AppNavigator from "./src/AppNavigator";


class Main extends Component {
    theme = createTheme({
        lightColors: {
            ...Platform.select({
                default: lightColors.platform.android,
                ios: lightColors.platform.ios,
            }),
            screenBackground: 'rgba(0, 0, 0, 0.7)',
            overlay: 'rgba(91, 91, 91, 0.5)',
            today: '#FF6B6B',
            tomorrow: '#FEF16B',
            week: '#C1FFA6',
            month: '#99B7FF',
            trash: 'red',
            edit: '#9CBC87'
        },
    })

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <NavigationContainer>
                    <AppNavigator schema={this.theme.lightColors} />
                </NavigationContainer>
            </ThemeProvider>
        )
    }
}

AppRegistry.registerComponent(appName, () => Main);