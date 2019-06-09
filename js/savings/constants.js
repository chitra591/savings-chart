import {Dimensions, StatusBar, Platform} from 'react-native';

const {height, width} = Dimensions.get("window");

export const stringConstants = {
    SCREEN_HEIGHT: Platform.OS === 'ios' ? height : height-StatusBar.currentHeight,
    StatusBarHeight: StatusBar.currentHeight,
    SCREEN_WIDTH: width,
    APP_COLOR_BLUE_1: '#00EBD5',
    APP_COLOR_BLUE_2: '#00D9E6',
    APP_COLOR_BLUE_3: '#00C0F0',
    APP_COLOR_BLUE_4: '#00ADFB',
    APP_COLOR_BLUE_5: '#0094F2',
    BASE_FONT_SIZE: 16
};