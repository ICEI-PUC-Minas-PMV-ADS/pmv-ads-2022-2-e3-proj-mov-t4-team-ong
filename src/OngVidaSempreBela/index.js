/**
 * @format
 */
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import AppNavigator from "./src/AppNavigator";

import { name as appName } from './app.json';

import { LogBox } from 'react-native';
import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreLogs(['Reanimated 2']);

const Main = () => {

    const [theme, setTheme] = useState(themeContext)

    console.log('index / Main : ')
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AppNavigator theme={theme} />
            </NavigationContainer>
        </ThemeProvider>
    );
};

AppRegistry.registerComponent(appName, () => Main);
