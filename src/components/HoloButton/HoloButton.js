import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import {UiKitContext, getDefaultThemeData} from '../../configs/theming';

export default function HoloButton(props) {

  if (!UiKitContext.useTheme) {
    return null;
  }
  
  const theme = UiKitContext.useTheme(props.theme);
  const defaultTheme = getDefaultThemeData();

  const {
    disabled,
    label,
    isFocused
  } = props;

 
  return (
      <TouchableWithoutFeedback >
        <View style={{
          width: 200,
          height: 44,
          justifyContent: "center",
          backgroundColor: disabled ? theme.colors.primary : isFocused ? theme.colors.primary_1 : theme.colors.primary,
          borderRadius: 32,
          opacity: disabled ? 0.3 : 1,
        }}>
          <Text style={{
            fontSize: 16,
            lineHeight: 24,
            color: defaultTheme.baseTheme.colors.basicColors.diamond,
            textAlign: "center",
            opacity: disabled ? 1 : isFocused ? 0.7 : 1
          }}>
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
  );
}