import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Text } from "@rneui/themed";


const drawerNavigatorOptions = {
    headerShown: true,
}

class DrawerNavigator extends Component {
    render() {
        console.log('DrawerNavigator', props)
        
        const Drawer = createDrawerNavigator();
        return (
            <Text>Teste 1</Text>
        )
    }
}

export default DrawerNavigator