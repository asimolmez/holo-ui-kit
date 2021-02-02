import { createTheming } from '@callstack/react-theme-provider';
import { DEFAULT_THEME } from "../themes";

const ThemeContext = {
    withTheme: null, 
    useTheme: null,
    ThemeProvider: null,
}

const initTheme = function(themeData) {
    console.log(themeData);
    const { withTheme, useTheme, ThemeProvider } = createTheming(themeData);
    ThemeContext.withTheme = withTheme;
    ThemeContext.useTheme = useTheme;
    ThemeContext.ThemeProvider = ThemeProvider;
};

function getDefaultThemeData ()  {
    return DEFAULT_THEME;
}


export {ThemeContext, initTheme, getDefaultThemeData};
