import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ThemeProvider, withTheme } from '../../services/ThemeService';



class HoloButtonComponent extends Component {

  state = {
    isFocused: false,
  }

  render() {
    const {
      appType,
      disabled,
      label,
      theme: themeData,
    } = this.props;

    const theme = themeData[appType]; 

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