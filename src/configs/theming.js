import { createTheming } from '@callstack/react-theme-provider';
import { AVA_THEME } from "../themes";

const ThemeContext = {
    withTheme: null, 
    useTheme: null,
    themeProvider: null,
}

const initTheme = function(themeData) {
    console.log(themeData);
    const { withTheme, useTheme, ThemeProvider } = createTheming(themeData);
    ThemeContext.withTheme = withTheme;
    ThemeContext.useTheme = useTheme;
    ThemeContext.themeProvider = ThemeProvider;
};

function getThemeData ()  {
    return AVA_THEME;
}


export {ThemeContext, initTheme, getThemeData};
