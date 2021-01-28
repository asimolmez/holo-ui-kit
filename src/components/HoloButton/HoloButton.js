import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { themeService } from '../../services/ThemeService';
class HoloButton extends Component {

  state = {
    isFocused: false,
  }

  render() {
    const theme = themeService.getCurrentTheme(appType);

    const {
      appType,
      disabled,
      label,
    } = this.props;

    const {
      isFocused,
    } = this.state;
  
    return (
      <TouchableWithoutFeedback onPressIn={this._onPressIn} onPressOut={this._onPressOut}>
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
            color: theme.baseTheme.colors.basicColors.diamond,
            opacity: disabled ? 1 : isFocused ? 0.7 : 1
          }}>
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
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

export default HoloButton;