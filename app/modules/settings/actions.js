import { createActions } from 'redux-actions';
import types from './types';

export const { createSetting, updateSetting, deleteSetting, selectSetting  } = createActions(
  types.CREATE_SETTING,
  types.UPDATE_SETTING,
  types.DELETE_SETTING,
  types.SELECT_SETTING
);

