/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import React, { createContext, useState } from "react";

import { NavigationContainer} from "@react-navigation/native";

import { MD3DarkTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { UsersProvider } from './src/context.js/UserContext';

export const ThemeContext = createContext();

const Main = (props) => {

    const [theme, setTheme] = useState(DefaultTheme)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <NavigationContainer theme={theme}>
                <UsersProvider>
                    <App />
                </UsersProvider>
            </NavigationContainer>
        </ThemeContext.Provider>
    )
}

export default Main

AppRegistry.registerComponent(appName, () => Main);
