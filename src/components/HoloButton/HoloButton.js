import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ThemeProvider, withTheme } from '../../services/ThemeService';

class HoloButtonComponent extends Component {

  state = {
    isFocused: false,
  }

  render() {
    const {
      disabled,
      label,
      theme,
      backgroundColor = theme.colors.primary,
      disabledBackgroundColor = theme.colors.primary,
      focusedBackgroundColor = theme.colors.primary_1,
    } = this.props;

    const {
      isFocused,
    } = this.state;
  
    return (
      <ThemeProvider>
      <TouchableWithoutFeedback onPressIn={this._onPressIn} onPressOut={this._onPressOut}>
        <View style={{
          width: 200,
          height: 44,
          justifyContent: "center",
          backgroundColor: disabled ? disabledBackgroundColor : isFocused ? focusedBackgroundColor : backgroundColor,
          borderRadius: 32,
          opacity: disabled ? 0.3 : 1,
        }}>
          <Text style={{
            fontSize: 16,
            lineHeight: 24,
            textAlign: "center",
            color: theme.baseTheme.colors.basicColors.diamond,
            opacity: disabled ? 1 : isFocused ? 0.7 : 1
          }}>
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      </ThemeProvider>
    );
  }


  _onPressIn = () => {
    this.setState({
      isFocused: true
    });
  }

  _onPressOut = () => {
    this.setState({
      isFocused: false
    });
  }
}

export default withTheme(HoloButtonComponent);