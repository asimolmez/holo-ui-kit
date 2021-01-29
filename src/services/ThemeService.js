import {APP_TYPES} from "../configs/constants";
import { AVA_THEME, OPTIFAST_THEME } from "../themes";
import { createTheming } from '@callstack/react-theme-provider';

const { ThemeProvider, withTheme } = createTheming(getThemeData());

function getThemeData ()  {
    return {
        "PREMIUM": AVA_THEME,
        "OPTIFAST_UK": OPTIFAST_THEME,
    }
}

export { ThemeProvider, withTheme }
