import {APP_TYPES} from "../configs/constants";
import { AVA_THEME, OPTIFAST_THEME } from "../themes";

class ThemeService {
    getCurrentTheme = (appName) => {
        let currentTheme;
        switch (appName) {
            case APP_TYPES.AVA:
                currentTheme = AVA_THEME
                break;
            case APP_TYPES.OPTIFAST_UK:
                currentTheme = OPTIFAST_THEME;
                break;
            default:
                currentTheme = AVA_THEME
                break;
        }
        return currentTheme;
    }
}

export const themeService = new ThemeService();