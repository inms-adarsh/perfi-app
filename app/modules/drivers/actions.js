import { createActions } from 'redux-actions';
import types from './types';

export const { createDriver, updateDriver, deleteDriver, selectDriver  } = createActions(
  types.CREATE_DRIVER,
  types.UPDATE_DRIVER,
  types.DELETE_DRIVER,
  types.SELECT_DRIVER
);

