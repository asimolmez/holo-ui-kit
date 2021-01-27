import React from 'react';
import { Button, View } from 'react-native';
import { themeService } from '../../services/ThemeService';

let theme;

const HoloButton = (props) => {
  const {
    appType,
  } = props;

  theme = themeService.getCurrentTheme(appType);

  return (
    <View style={{width: 200, backgroundColor: theme.colors.primary,}}>
      <Button
        title="Loading Button"
        onPress={() => { }} />
    </View>
  );
};


export default HoloButton;