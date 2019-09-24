import React from 'react';
import { NavigationButton } from '../components';
import screens from '../constants/screens';

const headerOptions = defaultOptions => ({ navigation }) => {
  Object.assign(defaultOptions, {
    headerLeft:
    <NavigationButton
      iconName="bars"
      onPress={() => navigation.toggleDrawer()}
    />,
  });
  return defaultOptions;
};

export default headerOptions;
