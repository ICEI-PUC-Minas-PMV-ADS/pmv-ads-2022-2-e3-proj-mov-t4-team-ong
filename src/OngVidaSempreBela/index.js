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

import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);



class Main extends Component {
    render() {
        console.log('index / Main : ')

        const theme = createTheme({
            lightColors: {
                ...Platform.select({
                    default: lightColors.platform.android,
                    ios: lightColors.platform.ios,
                }),
                overlay: 'rgba(91, 91, 91, 0.5)',
                today: '#FF6B6B',
                tomorrow: '#FEF16B',
                week: '#C1FFA6',
                month: '#99B7FF',
                trash: 'red',
            },
        })
        return (
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <AppNavigator schema={theme.lightColors} />
                </NavigationContainer>
            </ThemeProvider>
        )
    }
}

AppRegistry.registerComponent(appName, () => Main);