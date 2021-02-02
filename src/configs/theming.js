import { createTheming } from '@callstack/react-theme-provider';
import { DEFAULT_THEME } from "../themes";

const UiKitContext = {
    withTheme: null, 
    useTheme: null,
    ThemeProvider: null,
}

const initTheme = function(themeData) {
    console.log(themeData);
    const { withTheme, useTheme, ThemeProvider } = createTheming(themeData);
    UiKitContext.withTheme = withTheme;
    UiKitContext.useTheme = useTheme;
    UiKitContext.ThemeProvider = ThemeProvider;
};

function getDefaultThemeData ()  {
    return DEFAULT_THEME;
}


export {UiKitContext, initTheme, getDefaultThemeData};
