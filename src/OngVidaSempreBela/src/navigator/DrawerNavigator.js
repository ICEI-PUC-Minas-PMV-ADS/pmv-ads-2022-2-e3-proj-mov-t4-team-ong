import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Text } from "@rneui/themed";

//const Drawer = createDrawerNavigator();

const drawerNavigatorOptions = {
    headerShown: true,
}

class DrawerNavigator extends Component {
    render() {
        return (
            <Text>Teste 1</Text>
        )
    }
}

export default DrawerNavigator