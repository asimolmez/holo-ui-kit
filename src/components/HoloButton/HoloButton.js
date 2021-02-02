import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useTheme } from '../../services/ThemeService';

export default function HoloButton(props) {
  const theme = props.useTheme ? props.useTheme() : useTheme();
  const defaulTheme = useTheme();

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
            textAlign: "center",
            color: defaulTheme.baseTheme.colors.basicColors.diamond,
            opacity: disabled ? 1 : isFocused ? 0.7 : 1
          }}>
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
  );
}