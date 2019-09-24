import React from 'react';
import { NavigationButton } from '../components';
import screens from '../constants/screens';

const headerOptions = defaultOptions => ({ navigation }) => {
  const isInitRoute = navigation.state.key === 'Init';

  return {
    headerLeft:
    <NavigationButton
      iconName="bars"
      onPress={() => navigation.toggleDrawer()}
    />,
  }
};

export default headerOptions;
