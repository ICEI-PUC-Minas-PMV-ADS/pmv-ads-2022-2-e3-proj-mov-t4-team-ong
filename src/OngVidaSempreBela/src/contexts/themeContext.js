import { Platform } from 'react-native';
import { lightColors, createTheme } from '@rneui/themed';

export default themeContext = createTheme({
    lightColors: {
        ...Platform.select({
            default: lightColors.platform.android,
            ios: lightColors.platform.ios,
        }),
        overlay: 'rgba(255, 255, 255, 0.5)',
        today: '#FF6B6B',
        tomorrow: '#FEF16B', 
        week: '#C1FFA6',
        month: '#99B7FF',
        trash: 'red',
    },
});