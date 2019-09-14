import Navigator from '../../navigation/Navigator';
import settingTypes from '../settings/types';
import { getResetAction } from '../../utils/navHelpers';
import screens from '../../constants/screens';
import types from './types';
import { Alert } from 'react-native';

const getResetState = (state, routeName) => {
  const newState =  Navigator.router.getStateForAction(
    getResetAction([{ routeName }], null),
    state,
  );
  return newState;
}

const navigatorReducer = (state, action) => {
  switch (action.type) {
    case types.GO_TO_INITIAL_SCREEN:
    case settingTypes.SIGN_IN:
      return getResetState(state, screens.DrawerRoot);
    default:
      return Navigator.router.getStateForAction(action, state);
  }
};

export default navigatorReducer;
