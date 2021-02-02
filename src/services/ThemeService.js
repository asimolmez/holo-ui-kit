import { AVA_THEME } from "../themes";
import { createTheming } from '@callstack/react-theme-provider';

const { ThemeProvider, withTheme, useTheme } = createTheming(getThemeData());

function getThemeData ()  {
    return AVA_THEME;
}

export { ThemeProvider, withTheme, useTheme }
