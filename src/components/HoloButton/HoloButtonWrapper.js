import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ThemeProvider } from '../../services/ThemeService';
import HoloButtonComponent from "./HoloButton";

export default function HoloButton(props) {
    return (
      <ThemeProvider>
        <HoloButtonComponent {...props}></HoloButtonComponent>
      </ThemeProvider>
    )
  }