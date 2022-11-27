import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, goBack, children }) => {
    return (
        <Appbar.Header style={{ backgroundColor: '#CCCCFF', color: "white" }}>
            {
                goBack &&
                <Appbar.BackAction onPress={goBack} />
            }
            <Appbar.Content title={title} />
            {children}
            <Appbar.Action icon="account-arrow-left" />
        </Appbar.Header>
    );
};

export default Header;