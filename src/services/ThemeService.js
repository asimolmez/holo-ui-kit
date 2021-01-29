import {APP_TYPES} from "../configs/constants";
import { AVA_THEME, OPTIFAST_THEME } from "../themes";
import { createTheming } from '@callstack/react-theme-provider';


class ThemeService {

    theme;

    constructor() {
        const { ThemeProvider, withTheme, useTheme } = createTheming(this.setTheme(null));

        this.theme = useTheme();
    }
    setTheme = (appName) => {
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

    getTheme = () => {
        return this.theme;
    }
}

export const themeService = new ThemeService();