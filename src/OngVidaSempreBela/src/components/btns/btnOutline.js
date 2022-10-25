import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const btnOutline = (props) => {
    return (
        <TouchableOpacity>
            <View
                style={styleAuth.button}
                onPress={props.onPress}
            >
                <Text style={styleAuth.buttonText}  >
                    {props.funcao}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default btnOutline;
