import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from './Navigator';

const NavigatorView = ({ dispatch, navigator }) => (
  <Navigator/>
);

NavigatorView.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
};

export default NavigatorView;
